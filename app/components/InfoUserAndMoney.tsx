import SvgGreenArrow from "~/icons/arrowGreenIcon";

interface InfoUserAndMoneyProps {
  text: string;
  textPts: string;
}

export default function InfoUserAndMoney({
  text,
  textPts,
}: InfoUserAndMoneyProps) {
  return (
    <div className="flex w-min-full justify-between">
      <div className="text-left">
        <p className="text-gray text-xs sm:text-sm lg:text-lg">{text},</p>
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
          Ismael Amex
        </h1>
      </div>
      <div>
        <div className="flex flex-col gap-y-1 text-center items-end">
          <p className="text-gray text-xs sm:text-sm lg:text-md">{textPts}</p>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
            R$ 0,00
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
  );
}
