import Variation from "./variation";

export type InfoActionDetailsProps = {
  nameAction: string;
  valueAction: number;
  price: number;
  actionImage: string;
};

export default function InfoActionDetails({
  nameAction,
  valueAction,
  price,
  actionImage,
}: InfoActionDetailsProps) {
  return (
    <div className="flex justify-between px-3 text-white">
      <p>+ R$ {price}</p>
      <div className="flex gap-x-4">
        <Variation nameAction={nameAction} valueAction={valueAction} />
        <div className="w-7 h-full bg-red-600 rounded">
          <img src={actionImage} alt="" />
        </div>
      </div>
    </div>
  );
}
