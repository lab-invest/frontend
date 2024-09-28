import Variation from "./variation";

export default function InfoActionDetails() {
  return (
    <div className="flex justify-between px-3 text-white">
      <p>+ R$ xx.xx</p>
      <div className="flex gap-x-4">
        <Variation nameAction="P3TR4" valueAction={29} />
        <div className="w-7 h-full bg-red-600 rounded">
          <img
            src="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--600.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
