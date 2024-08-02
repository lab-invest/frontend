import { greenArrow } from "../../../public/icons/arrows/greenArrow";

export function MainInfo() {
  return (
    <div className="mt-6 sm:mt-10 lg:mt-12">
      <div className="text-white text-center">
        <div className="pr-3 sm:pr-6 lg:pr-8">
          <p className="text-gray text-xs sm:text-sm lg:text-md mb-0.5 sm:mb-1">BOVESPA</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pt-0.5 sm:pt-1">112.520 pts</h1>
          <div className="flex justify-center items-center pt-1 sm:pt-1.5 lg:pt-2 text-base sm:text-lg lg:text-xl">
            <div className="flex items-center">
              {greenArrow(10, 8)}
              <p className="text-green ml-1 sm:ml-1.5 font-bold">X,XX%</p>
            </div>
            <p className="ml-1 sm:ml-2 lg:ml-3 text-gray">(12 meses)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
