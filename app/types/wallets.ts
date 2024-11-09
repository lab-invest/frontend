export type Stock = {
  ticker: string;
  quantity: number;
  averagePrice: number;
};

export type Wallet = {
  [ticker: string]: Stock;
};

export type WalletsProps = {
  [walletName: string]: Wallet;
};
