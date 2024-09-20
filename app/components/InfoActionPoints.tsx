import SvgGreenArrow from "~/icons/arrowGreenIcon";

interface InfoActionPointsProps {
  textPts: string;
}

export default function InfoActionPoints({ textPts }: InfoActionPointsProps) {
  return (
    <>
      <div className="flex flex-col gap-y-1 text-center items-center">
        <p className="text-gray text-lg ">{textPts}</p>
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
          100.000pts
        </h1>
        <div className="flex justify-between text-base lg:text-lg gap-x-6">
          <div className="flex items-center gap-x-1.5">
            <SvgGreenArrow />
            <p className="text-green_good font-bold">X,XX%</p>
          </div>
          <p className="text-gray">(12 meses)</p>
        </div>
      </div>
      <div className="w-0.5 bg-green-900"></div>
    </>
  );
}
