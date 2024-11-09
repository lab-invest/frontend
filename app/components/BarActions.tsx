interface ActionbarProps {
  nameAction: string;
  openAction: number;
  highAction: number;
  lowAction: number;
  closeAction: number;
  volumeAction: number;
  action_image: string;
}

export default function ActionBar({
  nameAction,
  openAction,
  highAction,
  lowAction,
  closeAction,
  volumeAction,
  action_image,
}: ActionbarProps) {
  const nameActionUpdate = nameAction.split(" S.A")[0].trim();
  return (
    <div className="bg-secondary p-3 flex rounded-sm">
      <div className="flex items-center mr-6">
        <div className="w-6 mr-4">
          <img src={action_image} alt="teste" />
        </div>
        <p className=" text-white text-sm 2xl:text-base font-semibold">
          {nameActionUpdate}
        </p>
      </div>

      <div className="flex 2xl:text-base text-xs w-full justify-between pr-4">
        <div className="flex items-center text-gray">
          <p>Open</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ {openAction.toFixed(2)}</p>
        </div>
        <div className="flex items-center text-gray">
          <p>High</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ {highAction.toFixed(2)}</p>
        </div>
        <div className="flex items-center text-gray">
          <p>Close</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ {closeAction.toFixed(2)}</p>
        </div>
        <div className="flex items-center text-gray">
          <p>Low</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ {lowAction.toFixed(2)}</p>
        </div>
        <div className="flex items-center text-gray">
          <p>Volume</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ {volumeAction.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
