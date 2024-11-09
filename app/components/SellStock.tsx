import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

interface Asset {
  ticker: string;
  quantity: number;
  average_price: number;
}

interface Wallet {
  [assetTicker: string]: Asset;
}

export interface WalletsData {
  [walletName: string]: Wallet;
}

interface SellStockProps {
  availableBalance: number;
  wallets: string;
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
  const [isSellEnabled, setIsSellEnabled] = useState<boolean>(false);

  const parsedWallets: WalletsData = JSON.parse(wallets);

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
      const wallet = parsedWallets[selectedWallet];
      if (wallet) {
        const asset = wallet[tickerWithSuffix] || wallet[ticket];
        if (asset) {
          setMaxQuantity(asset.quantity);
          setIsSellEnabled(true);
          if (quantity > asset.quantity) {
            setQuantity(asset.quantity);
          }
          setErrorMessage("");
        } else {
          setMaxQuantity(0);
          setQuantity(1);
          setIsSellEnabled(false);
          setErrorMessage("Não há ações suficientes para venda.");
        }
      } else {
        setMaxQuantity(0);
        setQuantity(1);
        setIsSellEnabled(false);
        setErrorMessage("Carteira selecionada não contém ações disponíveis.");
      }
    } else {
      setMaxQuantity(0);
      setQuantity(1);
      setIsSellEnabled(false);
    }
  }, [selectedWallet, tickerWithSuffix, ticket, quantity, parsedWallets]);

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
              {Object.keys(parsedWallets).length === 0 ? (
                <option value="" disabled>
                  No wallets available
                </option>
              ) : (
                Object.keys(parsedWallets).map((walletName, index) => (
                  <option
                    key={index}
                    value={walletName}
                    className="bg-secondary text-gray-300"
                  >
                    {walletName}
                  </option>
                ))
              )}
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
              !isSellEnabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isSellEnabled}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}
