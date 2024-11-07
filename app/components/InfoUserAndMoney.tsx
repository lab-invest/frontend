import SvgArrow from "~/icons/arrowDefaultIcon";
import SvgGreenArrow from "~/icons/arrowGreenIcon";
import SvgRedArrow from "~/icons/arrowRedIcon";

interface InfoUserAndMoneyProps {
  text: string;
  textPts: string;
  nameUser: string;
  walletValue: number;
  percentChange: number; // Novo prop para o percentual de mudança
}

function verifyAction(valueAction: number) {
  if (valueAction > 0) {
    return {
      color: "text-green_good",
      imageArrow: <SvgGreenArrow />,
    };
  } else if (valueAction < 0) {
    return {
      color: "text-red-500",
      imageArrow: <SvgRedArrow />,
    };
  } else {
    return {
      color: "text-white",
      imageArrow: <SvgArrow />,
    };
  }
}

export default function InfoUserAndMoney({
  text,
  textPts,
  nameUser,
  walletValue,
  percentChange,
}: InfoUserAndMoneyProps) {
  const action = verifyAction(percentChange);

  const formattedPercentChange =
    percentChange > 0
      ? `+${percentChange.toFixed(2)}`
      : percentChange.toFixed(2);

  return (
    <div className="flex w-full justify-between">
      <div className="text-left">
        <p className="text-gray text-xs sm:text-sm lg:text-lg">{text}</p>
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
          {nameUser}
        </h1>
      </div>
      <div className="flex gap-y-6 items-center">
        <div className="flex flex-col gap-y-1 text-center items-end">
          <p className="text-gray text-xs sm:text-sm lg:text-md">{textPts}</p>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
            R$ {walletValue.toFixed(2)}
          </h1>
          <div className="flex justify-between text-base lg:text-lg gap-x-6">
            <div className="flex items-center gap-x-1.5">
              {action.imageArrow}
              <p className={`font-bold ${action.color}`}>
                {formattedPercentChange}%
              </p>
            </div>
            <p className="text-gray">(12 meses)</p>
          </div>
        </div>
        <div className="w-0.5 bg-green-900"></div>
      </div>
    </div>
  );
}
