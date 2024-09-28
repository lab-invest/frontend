import { LoaderFunction } from "@remix-run/node";
import { InfoActionDetails, PercentChangeIndicator } from "~/components";
import { GetWalletByName } from "~/services/getWalletByName";

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const requestData = await GetWalletByName(Number(id));
  return requestData;
};

export default function SpecificWallet() {
  return (
    <div className="flex gap-x-8 h-full">
      <div className="flex flex-col py-4 justify-between bg-secondary w-full max-w-72 min-h-[588px] rounded">
        <div className="flex flex-col gap-y-6">
          {Array.from({ length: 5 }, (_, i) => (
            <InfoActionDetails key={i} />
          ))}
        </div>
        <div className="flex flex-col text-white items-center">
          <h1 className="text-lg">Minha carteira principal</h1>
          <p className="text-2xl font-semibold">R$ XX,XX</p>
          <PercentChangeIndicator percentChange={2} />
        </div>
      </div>
      <div className="bg-red-800 flex items-center justify-center w-full">
        <p>grafico das carteiras</p>
      </div>
    </div>
  );
}
