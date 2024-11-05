import { useNavigate } from "react-router-dom";
import SvgMore from "~/icons/more";
import Variation from "./variation";

interface InvestmentCardProps {
  name: string;
  price: number;
  growth: number;
  id: string;
  images: string[];
}

export default function Wallets({
  name,
  price,
  growth,
  id,
  images,
}: InvestmentCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/wallet/invest/${id}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick();
    }
  };

  const TOTAL_SQUARES = 7;
  const imagesToShow = images || [];
  const imagesDisplayed = imagesToShow.slice(0, TOTAL_SQUARES - 1);
  const placeholdersCount = TOTAL_SQUARES - imagesDisplayed.length - 1;
  const placeholders = Array.from({ length: placeholdersCount });

  return (
    <div className="flex flex-col min-h-44 items-center">
      <div className="relative w-fit top-4 right-6 self-end rounded-lg">
        <Variation valueAction={growth} />
      </div>
      <div
        className="flex flex-col justify-center px-4 w-72 h-full rounded-lg text-white bg-secondary"
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="button"
      >
        <h3 className="text-grayt">{name}</h3>
        <p>R$ {price?.toFixed(2)}</p>
        <div className="flex justify-between mt-4 pr-2">
          {imagesDisplayed.map((imageUrl, index) => (
            <img
              key={`img-${index}`}
              src={imageUrl}
              alt=""
              className="w-6 h-6 rounded-sm"
            />
          ))}

          {placeholders.map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="bg-third w-6 h-6 rounded-sm"
            ></div>
          ))}

          <div className="bg-third w-6 h-6 rounded-sm flex items-center justify-center">
            <SvgMore />
          </div>
        </div>
      </div>
    </div>
  );
}
