import { useFetcher } from "@remix-run/react";

interface ConfigOptionsUnitProps {
  uuid: string;
  name: string;
  textButton: string;
  description: string;
  isDestructive: boolean;
  hideButton: boolean;
  action: string;
  popupName: string;
  popupDescription: string;
  onClose: () => void;
}

export default function ConfigPopupUnit({
  uuid,
  name,
  textButton,
  description,
  isDestructive,
  hideButton,
  action,
  popupName,
  popupDescription,
  onClose,
}: ConfigOptionsUnitProps) {
  const fetcher = useFetcher();
  const isLoading = fetcher.state === "submitting";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-zinc-800 w-2/5 p-6 rounded-lg shadow-md">
        <h2 className="text-white text-lg font-semibold mb-2">{popupName}</h2>
        <p className="text-gray mb-4">{popupDescription}</p>

        <fetcher.Form method="post">
          <input type="hidden" name="uuid" value={uuid} />
          <input type="hidden" name="actionType" value={action} />

          <div className="flex items-center mb-4">
            <label className="text-gray mr-4" htmlFor="field">
              {name}
            </label>
            <input
              type="text"
              id="field"
              name={action}
              placeholder={description || "|"}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {!hideButton && (
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 rounded-md ${
                  isDestructive
                    ? "bg-red-600 text-white"
                    : "border border-white text-white"
                } hover:bg-gray-700`}
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isLoading}
                aria-busy={isLoading}
                className={`px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Carregando..." : textButton}
              </button>
            </div>
          )}
        </fetcher.Form>
      </div>
    </div>
  );
}
