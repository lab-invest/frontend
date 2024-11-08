import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { WalletsProps } from "~/types/wallets";

interface SellStockProps {
  availableBalance: number;
  wallets: WalletsProps[];
  ticket: string;
  nameAction: string;
  stockCotation: number;
  onClose: () => void;
}

export default function SellStock({
  availableBalance,
  wallets,
  nameAction,
  ticket,
  stockCotation,
  onClose,
}: SellStockProps) {
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [maxQuantity, setMaxQuantity] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const tickerWithSuffix = ticket.endsWith(".SA") ? ticket : `${ticket}.SA`;
  const fetcher = useFetcher();

  const incrementQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const estimatedValue = stockCotation * quantity;

  useEffect(() => {
    if (selectedWallet) {
      const wallet = wallets.find((w) => String(w.name) === selectedWallet);
      if (wallet && wallet.items) {
        const items = wallet.items.items;
        const item = items.find((i) => i.ticker === tickerWithSuffix);
        if (item) {
          setMaxQuantity(item.quantity);
          if (quantity > item.quantity) {
            setQuantity(item.quantity);
          }
          setErrorMessage("");
        } else {
          setMaxQuantity(0);
          setQuantity(1);
          setErrorMessage("Não há ações suficientes para venda.");
        }
      }
    } else {
      setMaxQuantity(0);
      setQuantity(1);
    }
  }, [selectedWallet, tickerWithSuffix, quantity, wallets]);

  useEffect(() => {
    if (
      fetcher.state === "idle" &&
      (fetcher.data as { success?: boolean })?.success
    ) {
      onClose();
    } else if ((fetcher.data as { error?: string })?.error) {
      setErrorMessage((fetcher.data as { error: string }).error);
    }
  }, [fetcher.state, fetcher.data, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary bg-opacity-50">
      <div className="bg-primary rounded-lg w-2/6 text-white">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <div className="w-6 mr-4 rounded-sm">
              <img src={ticket} alt="Company Logo" />
            </div>
            <div>
              <p className="text-gray-400">Company</p>
              <p className="font-bold">{nameAction}</p>
            </div>
          </div>
          <p className="text-white font-bold">R$ {stockCotation.toFixed(2)}</p>
        </div>

        <fetcher.Form method="post">
          <div className="grid gap-4 mb-6 p-4">
            <div>
              <label
                htmlFor="selectedWallet"
                className="text-gray-500 text-sm mb-2 block"
              >
                Wallet
              </label>
              <select
                id="selectedWallet"
                name="selectedWallet"
                value={selectedWallet}
                onChange={(e) => {
                  setSelectedWallet(e.target.value);
                  setErrorMessage("");
                }}
                className="w-full p-2 rounded border bg-transparent text-gray-500 border-gray-500 focus:border-purple-500 focus:ring-0"
              >
                <option value="" disabled>
                  Select a wallet
                </option>
                {wallets
                  .filter((wallet) => String(wallet.name) !== "geral")
                  .filter(
                    (wallet) =>
                      wallet.items &&
                      wallet.items.items.some(
                        (item) => item.ticker === tickerWithSuffix
                      )
                  )
                  .map((wallet, index) => (
                    <option
                      key={index}
                      value={String(wallet.name)}
                      className="bg-secondary text-gray-300"
                    >
                      {String(wallet.name)}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6 p-4 bg-gray-700 rounded">
            <button
              type="button"
              onClick={decrementQuantity}
              className={`text-2xl bg-gray-600 p-2 rounded ${
                quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={quantity <= 1}
            >
              -
            </button>
            <div className="text-center">
              <span className="text-gray-400 text-sm block">
                Quantity (Max: {maxQuantity})
              </span>
              <span className="text-xl font-bold">{quantity}</span>
              <input type="hidden" name="quantity" value={quantity} />
            </div>
            <button
              type="button"
              onClick={incrementQuantity}
              className={`text-2xl bg-gray-600 p-2 rounded ${
                quantity >= maxQuantity ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={quantity >= maxQuantity}
            >
              +
            </button>
          </div>

          <input type="hidden" name="estimatedValue" value={estimatedValue} />
          <input type="hidden" name="ticket" value={tickerWithSuffix} />
          <input type="hidden" name="stockCotation" value={stockCotation} />

          <div className="flex justify-between mb-2 p-4">
            <span className="text-gray-400">Current Balance</span>
            <span>R$ {availableBalance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between p-4">
            <span className="text-gray-400">Estimated Value</span>
            <span>R$ {estimatedValue.toFixed(2)}</span>
          </div>

          {errorMessage && (
            <div className="p-4 text-red-500 text-center">{errorMessage}</div>
          )}

          <div className="p-4 flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-700 rounded w-full p-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-green-700 rounded w-full p-2 ${
                !selectedWallet || maxQuantity === 0
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!selectedWallet || maxQuantity === 0}
            >
              Sell
            </button>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
}
