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
