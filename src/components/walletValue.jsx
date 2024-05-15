import { greenArrow } from "../../public/icons/arrows/greenArrow";

export function walletValue() {
  return (
    <div className="border-r-4 border-green text-white mr-11 mt-16" >
        <div className="text-right pr-14">
        <p className="text-gray text-xl">Total das carteiras</p>
        <h1 className="text-5xl font-semibold pt-2">R$ X,XX</h1>
        <div className="flex place-content-end pt-4 text-2xl">
            <div className="items-center flex">
                {greenArrow(14, 12)}
                <p className="text-green ml-2 font-bold">X,XX%</p>
            </div>
            <p className="ml-4 text-gray">(12 meses)</p>
        </div>
        </div>
    </div>
  );
}