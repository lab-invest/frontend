interface Wallet {
  ticker: string;
  quantity: number;
  average_price: number;
}

export interface UserData {
  uid: string; // Ajuste para uuid
  cpf: string;
  name: string;
  email: string;
  password: string;
  experience?: string; // Tornar opcional, caso não venha no retorno
  birth_date: string;
  balance: number;
  wallets: {
    [category: string]: {
      [ticker: string]: Wallet;
    };
  };
  rentability: number;
  user_photo: string;
}
