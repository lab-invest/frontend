import Variation from "./Variation";

interface SpecActionsProps {
  actionName: string;
  valueAction: number;
  actionValues?: [];
}

export default function SpecActions({
  actionName,
  valueAction,
}: SpecActionsProps) {
  return (
    <div className="flex flex-col w-72 min-h-42 px-3 py-5 gap-6 bg-secondary text-gray rounded-lg ">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-base text-white">{actionName}</h1>
        <div className="flex gap-x-2 items-center">
          <Variation nameAction={actionName} valueAction={valueAction} />
          <div className="bg-third w-6 h-6 rounded-sm "></div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Open</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">R$ 400</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Open</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">R$ 400</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Open</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">R$ 400</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Open</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">R$ 400</p>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="whitespace-nowrap">Open</p>
        <hr className="w-full mx-2 text-third" />
        <p className="w-fit whitespace-nowrap">R$ 400</p>
      </div>
    </div>
  );
}
