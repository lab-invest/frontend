import { searchicon } from "@/icons/seachIcon";

export function actionbar(nameAction) {
  return (
    <div className="bg-secondary mr-10 ml-10 mt-4 p-4 flex justify-between rounded-lg">
      <div className="flex items-center mr-6">
        <div className="mr-2">{searchicon()}</div>
        <p className=" text-white font-semibold">{nameAction}</p>
      </div>
      <div className="flex text-base w-full justify-between">
        <div className="flex items-center text-gray">
          <p>Open</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ 31,82</p>
        </div>
        <div className="flex items-center text-gray">
          <p>High</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ 31,82</p>
        </div>
        <div className="flex items-center text-gray">
          <p>Close</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ 31,82</p>
        </div>
        <div className="flex items-center text-gray">
          <p>Low</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ 31,82</p>
        </div>
        <div className="flex items-center text-gray">
          <p>Volume</p>
          <div className="w-10 mr-1 ml-1 h-0.5 bg-third rounded-xl"></div>
          <p>R$ 3423423</p>
        </div>
      </div>
    </div>
  );
}
