import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { WalletsProps } from "~/types/wallets";

interface BuyStockProps {
  availableBalance: number;
  wallets: {
    wallets: WalletsProps[];
  };
  ticket: string;
  nameAction: string;
  stockCotation: number;
  onClose: () => void;
}

export default function BuyStock({
  availableBalance,
  wallets,
  nameAction,
  ticket,
  stockCotation,
  onClose,
}: BuyStockProps) {
  const [newWalletName, setNewWalletName] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [quantity, setQuantity] = useState(1);

  const fetcher = useFetcher();

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const estimatedValue = stockCotation * quantity;

  useEffect(() => {
    if (
      fetcher.state === "idle" &&
      (fetcher.data as { success: boolean })?.success
    ) {
      console.log("teste");
      onClose();
    }
  }, [fetcher.state, fetcher.data, onClose]);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-secondary bg-opacity-50">
        <div className="bg-primary rounded-lg w-2/6 text-white">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <div className="w-6 mr-4 rounded-sm">
                <img src={ticket} alt="Empresa responsável" />
              </div>
              <div>
                <p className="text-gray-400">Empresa responsável</p>
                <p className="font-bold">{nameAction}</p>
              </div>
            </div>
            <p className="text-white font-bold">
              R$ {stockCotation.toFixed(2)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 p-4">
            <div>
              <label
                htmlFor="newWalletName"
                className="text-gray-500 text-sm mb-2 block"
              >
                Nova carteira
              </label>
              <input
                id="newWalletName"
                name="newWalletName"
                type="text"
                value={newWalletName}
                onChange={(e) => setNewWalletName(e.target.value)}
                disabled={selectedWallet !== ""}
                className={`w-full p-2 rounded border border-gray-500 text-center placeholder-gray-500 ${
                  selectedWallet !== ""
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-transparent text-gray-500"
                }`}
                placeholder="Nome da nova carteira"
              />
            </div>
            <div>
              <label
                htmlFor="selectedWallet"
                className="text-gray-500 text-sm mb-2 block"
              >
                Carteira
              </label>
              <select
                id="selectedWallet"
                name="selectedWallet"
                value={selectedWallet}
                onChange={(e) => {
                  setSelectedWallet(e.target.value);
                  if (e.target.value !== "") {
                    setNewWalletName("");
                  }
                }}
                className="w-full p-2 rounded border bg-transparent text-gray-500 border-gray-500 focus:border-purple-500 focus:ring-0"
              >
                {wallets.wallets
                  .filter((wallet) => String(wallet.name) !== "geral")
                  .map((wallet, index) => (
                    <option
                      key={index}
                      value={String(wallet.name)}
                      className="bg-secondary text-gray-300"
                    >
                      {String(wallet.name)}
                    </option>
                  ))}
                <option value="" className="bg-secondary">
                  Criar nova carteira
                </option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6 p-4 bg-gray-700 rounded">
            <button
              type="button"
              onClick={decrementQuantity}
              className="text-2xl bg-gray-600 p-2 rounded"
            >
              -
            </button>
            <div className="text-center">
              <span className="text-gray-400 text-sm block">Quantidade</span>
              <span className="text-xl font-bold">{quantity}</span>
              <input type="hidden" name="quantity" value={quantity} />
            </div>
            <button
              type="button"
              onClick={incrementQuantity}
              className="text-2xl bg-gray-600 p-2 rounded"
            >
              +
            </button>
          </div>

          <input type="hidden" name="availableBalance" value={estimatedValue} />

          <div className="flex justify-between mb-2 p-4">
            <span className="text-gray-400">Saldo disponível</span>
            <span>R$ {availableBalance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between p-4">
            <span className="text-gray-400">Valor estimado</span>
            <span>R$ {estimatedValue.toFixed(2)}</span>
          </div>

          <div className="p-4 flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-700 rounded w-full p-2"
            >
              Cancelar
            </button>
            <button type="submit" className="bg-green-700 rounded w-full p-2">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
