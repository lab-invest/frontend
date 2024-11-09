interface WalletAside {
    stocks: Array<Array<{
      [symbol: string]: [
        number,  
        number,  
        string   
      ]
    }>>;
    walletRent: number;   
    totalWallet: number;  
  }