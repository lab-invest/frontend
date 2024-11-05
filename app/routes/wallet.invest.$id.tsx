import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { InfoActionDetails, PercentChangeIndicator } from "~/components";
import AppData from "~/services/appData";
import { getSession, getUser, sessionStorage } from "~/utils/session.server";

interface WalletData {
  name: string;
  total: number;
  rentability: number;
  items: Array<{
    ticker: string;
    quantity: number;
    stock_img: string;
  }>;
}

type LoaderData = {
  userData: WalletData;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const session = await getSession(request);
  const apiGet = new AppData();

  // Extrair o walletName da URL
  const url = new URL(request.url);
  const pathname = url.pathname;
  const segments = pathname.split("/");
  const walletName = segments[segments.length - 1];

  console.log("walletName extraído:", walletName);

  if (!walletName) {
    throw new Response("Nome da carteira não fornecido", { status: 400 });
  }

  try {
    const walletData = await apiGet.getWalletByName(user.uid, walletName);

    return json(
      {
        walletData,
      },
      {
        headers: {
          "Set-Cookie": await sessionStorage.commitSession(session),
        },
      }
    );
  } catch (error) {
    console.error("Erro ao buscar dados do usuário ou carteiras:", error);
    throw new Response("Erro ao buscar dados do usuário ou carteiras", {
      status: 500,
    });
  }
};

export default function SpecificWallet() {
  const { userData } = useLoaderData<LoaderData>();

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-x-8 h-full">
      <div className="flex flex-col py-4 justify-between bg-secondary w-full max-w-72 min-h-[588px] rounded">
        <div className="flex flex-col gap-y-6">
          {userData.items && userData.items.length > 0 ? (
            userData.items.map((item, index) => (
              <InfoActionDetails
                key={index}
                actionImage={item.stock_img}
                nameAction={item.ticker}
                price={0}
                valueAction={item.quantity}
              />
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
        <div className="flex flex-col text-white items-center">
          <h1 className="text-lg">{userData.name}</h1>
          <p className="text-2xl font-semibold">
            R${" "}
            {userData.total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </p>
          <PercentChangeIndicator percentChange={userData.rentability} />
        </div>
      </div>
      <div className="bg-red-800 flex items-center justify-center w-full">
        <p>Wallet charts</p>
      </div>
    </div>
  );
}
