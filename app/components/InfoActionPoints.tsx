import SvgArrow from "~/icons/arrowDefaultIcon";
import SvgGreenArrow from "~/icons/arrowGreenIcon";
import SvgRedArrow from "~/icons/arrowRedIcon";

interface InfoActionPointsProps {
  textPts: string;
  valueAction: number;
  hasPercentual?: boolean;
}

function verifyAction(valueAction: number) {
  if (valueAction > 0) {
    return {
      color: "text-green_good",
      bgColor: "bg-dark_green",
      imageArrow: <SvgGreenArrow />,
    };
  } else if (valueAction < 0) {
    return {
      color: "text-red-500",
      bgColor: "bg-dark_red",
      imageArrow: <SvgRedArrow />,
    };
  } else {
    return {
      color: "text-white",
      bgColor: "bg-third",
      imageArrow: <SvgArrow />,
    };
  }
}

export default function InfoActionPoints({
  textPts,
  valueAction,
  hasPercentual = false,
}: InfoActionPointsProps) {
  const action = verifyAction(valueAction ?? 0);

  // Formatação segura do valor da ação
  const formattedValueAction =
    (valueAction ?? 0) > 0
      ? `+${(valueAction ?? 0).toFixed(2)}`
      : (valueAction ?? 0).toFixed(2);

  return (
    <div className="flex flex-col gap-y-1 text-center items-center">
      <p className="text-gray text-lg">{textPts}</p>
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
        {valueAction.toFixed(2) ?? 0}
      </h1>
      {hasPercentual ? (
        <div
          className={`flex justify-between text-base lg:text-lg gap-x-6 ${action.color}`}
        >
          <div className="flex items-center gap-x-1.5">
            {action.imageArrow}
            <p className={`font-bold ${action.color}`}>
              {formattedValueAction}%
            </p>
          </div>
          <p className="text-gray">(12 meses)</p>
        </div>
      ) : null}
    </div>
  );
}
