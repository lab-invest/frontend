import { useNavigate } from "@remix-run/react";
import Variation from "./variation";

interface SpecActionsProps {
  actionName: string;
  valueAction: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  actionImage?: string;
  actionValues?: [];
}

export default function SpecActions({
  actionName,
  valueAction,
  actionImage,
  open,
  close,
  high,
  low,
  volume,
}: SpecActionsProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/action/acao/${actionName}`, { state: { valueAction } });
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div
      className="flex flex-col w-72 min-h-42 px-3 py-5 gap-6 bg-secondary text-gray rounded-lg cursor-pointer"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${actionName}`}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-base text-white">{actionName}</h1>
        <div className="flex gap-x-2 items-center">
          <Variation nameAction={actionName} valueAction={valueAction} />
          <div className="bg-third w-6 h-6 rounded-sm ">
            <img src={actionImage} alt="stock" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Open</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">{open.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Close</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">{close.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">High</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">{high.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Low</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">{low.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Volume</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">{volume}</p>
      </div>
    </div>
  );
}
