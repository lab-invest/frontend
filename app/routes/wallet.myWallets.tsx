import { json, redirect, useLoaderData } from "@remix-run/react";
import { InfoUserAndMoney, Wallets } from "~/components";
import WalletsGraphic from "~/components/WalletsGraphic";
import AppData from "~/services/appData";
import { UserData } from "~/types/userData";
import { WalletData } from "~/types/walletComparasion";
import { getSession, getUser, sessionStorage } from "~/utils/session.server";

export const loader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const apiGet = new AppData();

  try {
    const userData = await apiGet.getUserData(user.uid);
    const walletComparision = await apiGet.getWalletComparison(user.uid);
    const session = await getSession(request);

    return json(
      {
        userData,
        walletComparision,
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

export default function MyWallets() {
  const loaderData = useLoaderData<{
    userData: UserData;
    walletComparision: WalletData[];
  }>();
  const { userData, walletComparision } = loaderData;

  const wallets = userData.wallets.wallets;

  if (!wallets || wallets.length === 0) {
    return (
      <div className="flex flex-col gap-y-5 pt-5">
        <InfoUserAndMoney
          nameUser={userData.name}
          text="Carteiras de"
          walletValue={userData.balance}
          percentChange={userData.rentability}
          textPts="Total das carteiras"
        />
        <p>Você não possui carteiras.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-5 pt-5">
      <InfoUserAndMoney
        nameUser={userData.name}
        text="Carteiras de"
        walletValue={userData.balance}
        percentChange={userData.rentability}
        textPts="Total das carteiras"
      />
      <div className="flex items-center justify-center min-h-60">
        <WalletsGraphic historical_data={walletComparision} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {wallets.map((wallet) => {
          const images = Array.isArray(wallet.items)
            ? wallet.items.map((item) => item.stock_img)
            : [];
          return (
            <Wallets
              key={String(wallet.id)}
              name={String(wallet.name)}
              price={Number(wallet.total)}
              growth={Number(wallet.rentability)}
              id={String(wallet.name)}
              images={images}
            />
          );
        })}
      </div>
    </div>
  );
}
