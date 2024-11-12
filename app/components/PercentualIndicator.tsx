import SvgArrow from "~/icons/arrowDefaultIcon";
import SvgGreenArrow from "~/icons/arrowGreenIcon";
import SvgRedArrow from "~/icons/arrowRedIcon";

interface PercentChangeIndicatorProps {
  percentChange: number;
  period?: string;
}

function verifyAction(valueAction: number) {
  if (Math.abs(Number(valueAction.toFixed(2))) === 0.0) {
    return {
      color: "text-gray",
      imageArrow: <SvgArrow />,
    };
  }
  if (Number(valueAction.toFixed(2)) > 0) {
    return {
      color: "text-green_good",
      imageArrow: <SvgGreenArrow />,
    };
  } else if (Number(valueAction.toFixed(2)) < 0) {
    return {
      color: "text-red-500",
      imageArrow: <SvgRedArrow />,
    };
  } else {
    return {
      color: "text-gray",
      imageArrow: <SvgArrow />,
    };
  }
}

export default function PercentChangeIndicator({
  percentChange,
  period = "12 meses",
}: PercentChangeIndicatorProps) {
  const action = verifyAction(percentChange);

  const formattedPercentChange =
    percentChange > 0
      ? `+${percentChange.toFixed(2)}`
      : percentChange.toFixed(2);

  return (
    <div className="flex items-center gap-x-1.5">
      {action.imageArrow}
      <p className={`font-bold ${action.color}`}>{formattedPercentChange}%</p>
      <p className="text-gray">({period})</p>
    </div>
  );
}
