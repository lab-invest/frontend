export interface WalletItem {
  ticker: string;
  quantity: number;
  stock_img: string;
}

// Definição do tipo de cada carteira
export interface Wallet {
  name: string;
  total: number;
  rentability: number;
  items: WalletItem[];
}

export type WalletsProps = {
  [walletName: string]: Wallet;
};
