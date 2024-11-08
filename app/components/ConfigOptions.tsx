import { useState } from "react";
import ConfigPopupUnit from "./ConfigPopupUnit";
import ConfigPopup from "./ConfigPupop";

interface ConfigOptionsProps {
  uuid: string;
  name: string;
  description: string;
  textButton: string;
  isDestructive?: boolean;
  hideButton?: boolean;
  action: string;
  popupName: string;
  popupDescription: string;
  showPopup2: boolean;
}

export default function ConfigOptions({
  uuid,
  name,
  description,
  textButton,
  isDestructive = false,
  hideButton = false,
  action,
  popupName,
  popupDescription,
  showPopup2,
}: ConfigOptionsProps) {
  const [showPopup, setShowPopup] = useState(showPopup2);

  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md bg-secondary w-full">
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-neutral-500 font-medium text-sm">{description}</p>
        </div>
        {!hideButton && (
          <button
            onClick={handleClick}
            className={`px-3.5 py-1.5 text-white font-semibold text-sm rounded-md 
              ${
                isDestructive
                  ? "bg-red-600 hover:bg-red-700 w-24"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
          >
            {textButton}
          </button>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {action != "resetAccount" && action != "deleteAccount" ? (
            <ConfigPopupUnit
              uuid={String(uuid)}
              name={name}
              textButton={textButton}
              description={description}
              isDestructive={isDestructive}
              hideButton={hideButton}
              action={action}
              popupName={popupName}
              popupDescription={popupDescription}
              onClose={function (): void {
                return setShowPopup(false);
              }}
            />
          ) : (
            <ConfigPopup
              onClose={function (): void {
                return setShowPopup(false);
              }}
              name={popupName}
              action={action}
              description={popupDescription}
              isDestructive={isDestructive}
            />
          )}
        </div>
      )}
    </>
  );
}
