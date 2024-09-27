import { useLoaderData } from "react-router-dom";
import { UserData } from "~/types/userData";

export function useUserData() {
  const { userData } = useLoaderData() as { userData: UserData };

  const nameParts = userData.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[1] || "";

  return {
    firstName,
    lastName,
    userImage: userData.user_photo,
    wallets: Object.entries(userData.wallets).map(([ticker, wallet]) => ({
      ...wallet,
      ticker,
    })),
  };
}
