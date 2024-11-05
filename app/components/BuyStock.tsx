import React, { useState } from "react";

interface BuyStockProps {
  availableBalance: number;
  wallets: string[];
  ticket: string;
  stockCotation: number;
  onClose: () => void;
}

export default function BuyStock({
  availableBalance,
  wallets = [],
  ticket,
  stockCotation,
  onClose,
}: BuyStockProps) {
  const [price, setPrice] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [quantity, setQuantity] = useState(100);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const estimatedValue = stockCotation * quantity || 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary bg-opacity-50">
      <div className="bg-gray-800 rounded-lg w-2/6 text-white">
        <div className="flex justify-between items-center">
            <div className="flex items-center justify-center">
                <div className="w-6 mr-4 rounded-sm">
                    <img
                        src="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--600.png"
                        alt="teste"
                    />
                </div>
                <div>
                    <p className="text-gray-400">Empresa responsável</p>
                    <p className="font-bold">{ticket}</p>
                </div>
            </div>
            <div>
                <p className="text-white font-bold">R$ {stockCotation.toFixed(2)}</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
        <label className="text-gray-500 text-sm mb-2 block">Preço de compra</label>
        <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 rounded border border-gray-500 bg-transparent text-gray-500 text-center placeholder-gray-500"
            placeholder="R$ XX,XX"
        />
        </div>
        <div>
            <label className="text-gray-500 text-sm mb-2 block">Carteira</label>
            <select
                value={selectedWallet}
                onChange={(e) => setSelectedWallet(e.target.value)}
                className="w-full p-2 rounded border bg-transparent text-gray-500
                        border-gray-500 focus:border-purple-500
                        focus:ring-0 focus:bg-secondary focus:text-white"
                style={{
                backgroundColor: selectedWallet ? "rgb(31, 41, 55)" : "transparent",
                }}
            >
                <option value="" className="bg-secondary">Criar nova carteira</option>
                {wallets.map((wallet, index) => (
                <option key={index} value={wallet} className="bg-secondary text-gray-300 border-purple-500">
                    {wallet}
                </option>
                ))}
            </select>
            </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-6 p-4 bg-gray-700 rounded">
          <button onClick={decrementQuantity} className="text-2xl bg-gray-600 p-2 rounded">
            -
          </button>
          <div className="text-center">
            <span className="text-gray-400 text-sm block">Quantidade</span>
            <span className="text-xl font-bold">{quantity}</span>
          </div>
          <button onClick={incrementQuantity} className="text-2xl bg-gray-600 p-2 rounded">
            +
          </button>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Saldo disponível</span>
          <span>R$ {availableBalance.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Valor estimado</span>
          <span>R$ {estimatedValue.toFixed(4)}</span>
        </div>
        <button className="bg-green-700 rounded w-full">
          Comprar
        </button>
      </div>
    </div>
  );
}
