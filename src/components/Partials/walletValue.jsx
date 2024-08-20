import { greenArrow } from "../../../public/icons/arrows/greenArrow";

export function walletValue() {
  return (
    <div className="border-r-4 border-green text-white ">
      <div className="text-right pr-3 sm:pr-8 lg:pr-10">
        <p className="text-gray text-xs sm:text-sm lg:text-lg">Total das carteiras</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pt-1 sm:pt-2">R$ X,XX</h1>
        <div className="flex place-content-end pt-1 sm:pt-2 lg:pt-3 text-base sm:text-lg lg:text-xl">
          <div className="items-center flex">
            {greenArrow(10, 8)}
            <p className="text-green ml-1 sm:ml-1.5 font-bold">X,XX%</p>
          </div>
          <p className="ml-1 sm:ml-2 lg:ml-3 text-gray">(12 meses)</p>
        </div>
      </div>
    </div>
  );
}
