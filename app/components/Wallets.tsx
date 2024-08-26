import SvgMore from "~/icons/more";
import Variation from "./Variation";

interface WalletsProps {
  nameWallet?: string;
  valueWallet?: number;
  variationWallet?: number;
}

export default function Wallets({
  nameWallet,
  valueWallet,
  variationWallet,
}: WalletsProps) {
  return (
    <div className="flex flex-col min-h-44 items-end ">
      <div className="relative w-fit top-4 right-2 rounded-lg">
        <Variation valueAction={variationWallet} />
      </div>
      <div className="flex flex-col justify-center px-4 w-72 h-full rounded-lg text-white bg-secondary ">
        <h3 className="text-gray">{nameWallet}</h3>
        <p>R$ {valueWallet?.toFixed(2)}</p>
        <div className="flex justify-between mt-4 pr-2">
          <div className="bg-third w-6 h-6 rounded-sm "></div>
          <div className="bg-third w-6 h-6 rounded-sm "></div>
          <div className="bg-third w-6 h-6 rounded-sm "></div>
          <div className="bg-third w-6 h-6 rounded-sm "></div>
          <div className="bg-third w-6 h-6 rounded-sm "></div>
          <div className="bg-third w-6 h-6 rounded-sm flex items-center justify-center">
            <SvgMore />
          </div>
        </div>
      </div>
    </div>
  );
}
