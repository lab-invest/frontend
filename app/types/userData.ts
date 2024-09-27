interface Wallet {
  ticker: string;
  quantity: number;
  average_price: number;
}

export interface UserData {
  uid: string;
  cpf: string;
  name: string;
  email: string;
  password: string;
  experience: string;
  birth_date: string;
  balance: number;
  wallets: {
    [ticker: string]: Wallet;
  };
  user_photo: string;
}
