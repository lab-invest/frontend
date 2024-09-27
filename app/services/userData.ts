import axios from "axios";

export async function GetData(uid: string) {
  try {
    const response = await axios.get(
      `https://13c94aa8-65b0-4d9e-b6ec-2919ebbe9f68.mock.pstmn.io/userDataGet?uid=${uid}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw new Error("Falha ao buscar os dados.");
  }
}
