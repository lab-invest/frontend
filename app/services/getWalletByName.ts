export async function GetWalletByName(id: number) {
  try {
    const response = await fetch(
      `https://13c94aa8-65b0-4d9e-b6ec-2919ebbe9f68.mock.pstmn.io/userAction?uid=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao buscar os dados da carteira");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw new Error("Falha ao buscar os dados.");
  }
}
