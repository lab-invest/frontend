import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import AppData from "~/services/appData";
import {
  ActionBar,
  InfoActionPoints,
  PercentChangeIndicator,
  ActionGraphic    
} from "~/components";
import { StockData } from "~/types/stockData";

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
  console.log(stockData?.rentability);

  return (
    <div className="flex flex-col gap-6">
      <InfoActionPoints valueAction={stockData?.stock_cotation || 0} textPts="P3TR4" />
      <div className="flex flex-col">
        <div className="self-end">
          <PercentChangeIndicator percentChange={stockData?.rentability || 0} />
        </div>
        <div className="flex items-center justify-center min-h-80">
          <ActionGraphic historical_data={stockData?.historical_data}  />
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
        <button className="bg-green-700 rounded w-full">Comprar</button>
        <button className="bg-red-700 rounded w-full">Vender</button>
      </div>
    </div>
  );
}
