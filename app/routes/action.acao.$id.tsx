import { LoaderFunction } from "@remix-run/node";
import {
  ActionBar,
  InfoActionPoints,
  PercentChangeIndicator,
} from "~/components";
import { GetWalletByName } from "~/services/getWalletByName";

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const requestData = await GetWalletByName(Number(id));
  return requestData;
};

export default function SpecificWallet() {
  return (
    <div className="flex flex-col gap-6">
      <InfoActionPoints valueAction={2} textPts="P3TR4" />
      <div className="flex flex-col">
        <div className="self-end">
          <PercentChangeIndicator percentChange={2} />
        </div>
        <div className="flex items-center justify-center bg-red-500 min-h-80">
          <div>
            <p>LOCAL PARA GRAFICO</p>
          </div>
        </div>
      </div>
      <ActionBar nameAction="P3TR4" />
      <div className="flex h-10 gap-x-10 text-white">
        <button className="bg-green-700 rounded w-full">Comprar</button>
        <button className="bg-red-700 rounded w-full">Vender</button>
      </div>
    </div>
  );
}
