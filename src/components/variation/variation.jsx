import { arrow } from "../../icons/arrows/arrow";
import { greenArrow } from "../../icons/arrows/greenArrow";
import { redArrow } from "../../icons/arrows/redArrow";

function verifyAction(valueAction) {
  if (valueAction > 0) {
    return {
      color: "text-green",
      bgColor: "bg-dark_green",
      imageArrow: greenArrow(),
    };
  } else if (valueAction < 0) {
    return {
      color: "text-red",
      bgColor: "bg-dark_red",
      imageArrow: redArrow(),
    };
  } else {
    return { color: "", bgColor: "bg-third", imageArrow: arrow() };
  }
}

export function variation(nameAction, valueAction) {
  const { color, bgColor, imageArrow } = verifyAction(valueAction);

  const formattedValueAction =
    valueAction > 0
      ? `+${valueAction.toFixed(2)}`
      : `${valueAction.toFixed(2)}`;

  return (
    <div
      className={[
        "w-fit flex items-center justify-center p-1.5 rounded-lg",
        bgColor,
      ].join(" ")}
    >
      <div className="mr-1">{imageArrow}</div>
      <div className="mr-1">
        <p className="font-semibold text-white text-xs">{nameAction}</p>
      </div>
      <div className="flex text-center justify-center">
        <p className={["text-xs", color].join(" ")}>{formattedValueAction}%</p>
      </div>
    </div>
  );
}
