import { WalletsProps } from "./wallets";

export interface UserData {
  uuid: string;
  cpf: string;
  name: string;
  email: string;
  password: string;
  birth_date: string;
  balance: number;
  wallets: {
    wallets: WalletsProps[];
  };
  rentability: number;
  user_photo: string;
}
