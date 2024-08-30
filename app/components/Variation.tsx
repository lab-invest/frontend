import SvgArrow from "~/icons/arrowDefaultIcon";
import SvgGreenArrow from "~/icons/arrowGreenIcon";
import SvgRedArrow from "~/icons/arrowRedIcon";

interface VariationProps {
  nameAction?: string;
  valueAction?: number;
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

export default function Variation({
  nameAction,
  valueAction = 0,
}: VariationProps) {
  const { color, bgColor, imageArrow } = verifyAction(valueAction);

  const formattedValueAction =
    typeof valueAction === "number"
      ? valueAction > 0
        ? `+${valueAction.toFixed(2)}`
        : valueAction.toFixed(2)
      : "0.00";

  return (
    <div
      className={`w-fit flex items-center justify-center p-1.5 rounded-lg ${bgColor}`}
    >
      {imageArrow && <div className="mr-1">{imageArrow}</div>}
      <div className="mr-1">
        <p className="font-semibold text-white text-xs">{nameAction}</p>
      </div>
      <div className="flex text-center justify-center">
        <p className={`text-xs font-semibold ${color}`}>
          {" "}
          {formattedValueAction}%
        </p>
      </div>
    </div>
  );
}
