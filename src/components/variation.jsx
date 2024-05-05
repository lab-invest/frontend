import { arrow } from "@/icons/arrows/arrow";
import { greenArrow } from "@/icons/arrows/greenArrow";
import { redArrow } from "@/icons/arrows/redArrow";

function verifyAction(valueAction) {
  if (valueAction > 0) {
    return ["text-green", "bg-dark_green", greenArrow()];
  } else if (valueAction == 0) {
    return ["", "bg-third", arrow()];
  } else {
    return ["text-red", "bg-dark_red", redArrow()];
  }
}

export function variation(nameAction, valueAction) {
  const color = verifyAction(valueAction)[0];
  const bgColor = verifyAction(valueAction)[1];
  const imageArrow = verifyAction(valueAction)[2];

  const formattedValueAction =
    valueAction > 0 ? `+${valueAction.toFixed(2)}` : valueAction;

  return (
    <div
      className={[
        "w-fit flex items-center justify-center p-1.5 mt-4 ml-10 rounded-lg",
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
