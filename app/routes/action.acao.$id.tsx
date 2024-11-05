import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  ActionBar,
  ActionGraphic,
  BuyStock,
  InfoActionPoints,
  PercentChangeIndicator,
} from "~/components";
import AppData from "~/services/appData";
import { StockData } from "~/types/stockData";
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

  console.log("walletName extraído:", actionName);

  if (!actionName) {
    throw new Response("Nome da carteira não fornecido", { status: 400 });
  }

  try {
    const stockData = await apiGet.getStockInfos(actionName);
    console.log(stockData);

    return json(
      { stockData },
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
  const { stockData } = useLoaderData<{ stockData: StockData }>();
  // const [showBuyPopup, setShowBuyPopup] = useState(false);
  const [showBuyStock, setShowBuyStock] = useState(false);

  const handleBuyClick = () => setShowBuyStock(true);
  const handleCloseBuyStock = () => setShowBuyStock(false);

  return (
    <div className="flex flex-col gap-6">
      <InfoActionPoints
        valueAction={stockData?.stock_cotation || 0}
        textPts="P3TR4"
      />
      <div className="flex flex-col">
        <div className="self-end">
          <PercentChangeIndicator percentChange={stockData?.rentability || 0} />
        </div>
        <div className="flex items-center justify-center min-h-80">
          <ActionGraphic historical_data={stockData?.historical_data} />
        </div>
      </div>
      <ActionBar
        nameAction="P3TR4"
        openAction={stockData?.aditional_data.Open}
        closeAction={stockData?.aditional_data.Close}
        highAction={stockData?.aditional_data.High}
        lowAction={stockData?.aditional_data.Low}
        volumeAction={stockData?.aditional_data.Volume}
      />
      <div className="flex h-10 gap-x-10 text-white">
        <button
          className="bg-green-700 rounded w-full"
          onClick={handleBuyClick}
        >
          Comprar
        </button>
        <button className="bg-red-700 rounded w-full">Vender</button>
      </div>
      {showBuyStock && (
        <BuyStock
          availableBalance={100000}
          wallets={["1", "2", "3", "4", "5", "6"]}
          onClose={handleCloseBuyStock}
          ticket="PETR4"
          stockCotation={stockData?.stock_cotation}
        />
      )}
    </div>
  );
}
