import SvgGreenArrow from "~/icons/arrowGreenIcon";

interface PredictProps {
  valueAction?: number;
  textPts?: string;
}

export default function Predict({ valueAction, textPts }: PredictProps) {
  return (
    <div className="bg-red-500 bg-opacity-50 w-full h-full absolute flex items-center justify-center">
      <div className="bg-secondary flex justify-center items-center space-x-4 rounded-2xl w-fit px-10 py-4">
        <div className="text-center  text-white">
          <p className="text-gray text-xs sm:text-sm lg:text-lg">
            E se eu tivesse investido há
          </p>
          <h1 className="text-4xl font-bold uppercase">1 ANO</h1>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-y-1 text-center items-end">
            <p className="text-gray text-xs sm:text-sm lg:text-md">{textPts}</p>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
              R$ {valueAction?.toFixed(2)}
            </h1>
            <div className="flex justify-between text-base lg:text-lg gap-x-6">
              <div className="flex items-center gap-x-1.5">
                <SvgGreenArrow />
                <p className="text-green_good font-bold">X,XX%</p>
              </div>
              <p className="text-gray">(12 meses)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
