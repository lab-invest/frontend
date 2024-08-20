import { walletValue } from "@/components/Partials/walletValue";

export function Predict() {
  return (
    <div className="bg-secondary flex justify-center items-center space-x-4 rounded-2xl w-fit px-10 py-4">
      <div className="text-center  text-white">
        <p className="text-gray text-xs sm:text-sm lg:text-lg">E se eu tivesse investido há</p>
        <h1 className="text-4xl font-bold uppercase">1 ANO</h1>
      </div>
      <div className="flex">{walletValue()}</div>
    </div>
  );
}
