import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import AppData from "~/services/appData";
import {
  ActionBar,
  InfoActionPoints,
  PercentChangeIndicator,
  ActionGraphic,
  BuyStock
} from "~/components";
import { StockData } from "~/types/stockData";
import { useState } from "react";

export const loader: LoaderFunction = async ({ params }: any) => {
  const userDataGet = new AppData();

  try {
    const stockData = await userDataGet.getStockInfos("PETR4.SA");
    return { stockData };
  } catch (error) {
    console.error("Erro ao buscar dados da ação:", error);
    throw new Response("Erro ao buscar dados da ação", { status: 500 });
  }
};

export default function SpecificWallet() {
  const { stockData } = useLoaderData<{ stockData: StockData }>();
  const [showBuyPopup, setShowBuyPopup] = useState(false);
  const [showBuyStock, setShowBuyStock] = useState(false);

  const handleBuyClick = () => setShowBuyStock(true);
  const handleCloseBuyStock = () => setShowBuyStock(false);

  return (
    <div className="flex flex-col gap-6">
      <InfoActionPoints valueAction={stockData?.stock_cotation || 0} textPts="P3TR4" />
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
        <button className="bg-green-700 rounded w-full" onClick={handleBuyClick}>
          Comprar
        </button>
        <button className="bg-red-700 rounded w-full">Vender</button>
      </div>
      {showBuyStock && (
        <BuyStock
          availableBalance={100000}
          wallets={['1', '2', '3', '4', '5', '6']}
          onClose={handleCloseBuyStock}
          ticket="PETR4"
          stockCotation={stockData?.stock_cotation}
        />
      )}

    </div>
  );
}
