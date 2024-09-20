// interface Stock {
//   ticker: string;
//   quantity: number;
//   average_price: number;
// }

// interface Wallet {
//   [key: string]: Stock;
// }

// interface UserData {
//   uid: string;
//   cpf: string;
//   name: string;
//   email: string;
//   password: string;
//   birth_date: string;
//   balance: number;
//   //   wallets: {
//   //     [walletName: string]: Wallet;
//   //     // mapeamento
//   //   };
//   //   user_photo: string;
// }

export const getUserData = async (): Promise<object | null> => {
  try {
    const response = await fetch(`http://localhost:3000/user/get`);
    console.log(response);
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
    return null;
  }
};
