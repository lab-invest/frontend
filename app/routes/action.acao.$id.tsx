import {
  ActionFunction,
  json,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { useFetcher, useLoaderData, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import {
  ActionBar,
  ActionGraphic,
  BuyStock,
  InfoActionPoints,
  Loading,
  PercentChangeIndicator,
} from "~/components";
import SellStock from "~/components/SellStock";
import AppData from "~/services/appData";
import { StockData } from "~/types/stockData";
import { UserData } from "~/types/userData";
import { getSession, getUser, sessionStorage } from "~/utils/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const session = await getSession(request);
  const apiGet = new AppData();

  const url = new URL(request.url);
  const pathname = url.pathname;
  const segments = pathname.split("/");
  const actionName = segments[segments.length - 1];

  if (!actionName) {
    throw new Response("Nome da carteira não fornecido", { status: 400 });
  }

  try {
    const stockData = await apiGet.getStockInfos(actionName);
    const userData = await apiGet.getUserData(user.uid);

    return json(
      { stockData, userData },
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

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const newWalletName = formData.get("newWalletName") as string;
  const selectedWallet = formData.get("selectedWallet") as string;
  const quantity = Number(formData.get("quantity"));
  const average_price = Number(formData.get("availableBalance"));

  const url = new URL(request.url);
  const pathname = url.pathname;
  const segments = pathname.split("/");
  const actionName = segments[segments.length - 1];
  const teste = actionName.split(".");
  const ticker = teste[0];

  console.log("formData", formData);

  let walletName: string | null = null;

  if (newWalletName && !selectedWallet) {
    walletName = newWalletName;
  }

  try {
    const user = await getUser(request);
    const session = await getSession(request);
    const apiGet = new AppData();
    const buyAction = await apiGet.buyStock(
      user.uid,
      newWalletName || selectedWallet,
      ticker,
      quantity,
      average_price
    );
    return json(
      { buyAction, walletName, success: true },
      {
        headers: {
          "Set-Cookie": await sessionStorage.commitSession(session),
        },
      }
    );
  } catch (e) {
    console.error("Erro ao comprar ação", e);
    return json({ success: false, error: "Erro ao comprar ação" });
  }
};

export default function SpecificWallet() {
  const { stockData } = useLoaderData<{ stockData: StockData }>();
  const { userData } = useLoaderData<{ userData: UserData }>();
  const fetcher = useFetcher();
  const location = useLocation();
  const splitPath = location.pathname.split("/");
  const actionName = splitPath[splitPath.length - 1];
  const [showBuyStock, setShowBuyStock] = useState(false);
  const [showSellStock, setShowSellStock] = useState(false);

  const handleBuyClick = () => setShowBuyStock(true);
  const handleSellClick = () => setShowSellStock(true);
  const handleCloseBuyStock = () => setShowBuyStock(false);
  const handleCloseSellStock = () => setShowSellStock(false);

  useEffect(() => {
    if (
      fetcher.state === "idle" &&
      (fetcher.data as { success: boolean })?.success
    ) {
      setShowBuyStock(false);
      setShowSellStock(false);
    }
  }, [fetcher.state, fetcher.data, setShowBuyStock]);

  const serializedWallets = JSON.stringify(userData.wallets);

  return (
    <>
      {fetcher.state === "loading" ? (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900 z-50">
          <Loading />
        </div>
      ) : null}
      <div className="flex flex-col gap-6">
        <InfoActionPoints
          typePts="R$"
          pointValue={stockData.stock_cotation}
          valueAction={stockData.stock_cotation}
          textPts={actionName}
        />
        <div className="flex flex-col">
          <div className="self-end">
            <PercentChangeIndicator percentChange={stockData.rentability} />
          </div>
          <div className="flex items-center justify-center min-h-80">
            <ActionGraphic historical_data={stockData.historical_data} />
          </div>
        </div>
        <ActionBar
          action_image={stockData.img}
          nameAction={actionName}
          openAction={stockData.aditional_data.Open}
          closeAction={stockData.aditional_data.Close}
          highAction={stockData.aditional_data.High}
          lowAction={stockData.aditional_data.Low}
          volumeAction={stockData.aditional_data.Volume}
        />
        <div className="flex h-10 gap-x-10 text-white">
          <button
            className="bg-green-700 rounded w-full"
            onClick={handleBuyClick}
          >
            Comprar
          </button>
          <button
            className="bg-red-700 rounded w-full"
            onClick={handleSellClick}
          >
            Vender
          </button>
        </div>
        {showBuyStock && (
          <fetcher.Form method="post">
            <BuyStock
              nameAction={stockData.company_name}
              availableBalance={userData.balance}
              wallets={serializedWallets}
              onClose={handleCloseBuyStock}
              ticket={stockData.img}
              stockCotation={stockData?.stock_cotation}
            />
          </fetcher.Form>
        )}
        {showSellStock && (
          <fetcher.Form method="post">
            <SellStock
              nameAction={stockData.company_name}
              availableBalance={userData.balance}
              wallets={serializedWallets}
              onClose={handleCloseSellStock}
              ticket={stockData.img}
              stockCotation={stockData?.stock_cotation}
            />
          </fetcher.Form>
        )}
      </div>
    </>
  );
}
