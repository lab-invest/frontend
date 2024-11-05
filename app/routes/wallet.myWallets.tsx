import { useLoaderData } from "@remix-run/react";
import { InfoUserAndMoney, Wallets } from "~/components";
import { homeLoader } from "~/loader/homeLoader";
import { UserData } from "~/types/userData";

export const loader = homeLoader;

export default function MyWallets() {
  const loaderData = useLoaderData<{ userData: UserData }>();
  const { userData } = loaderData;
  const wallets = userData.wallets.wallets;

  if (!wallets || wallets.length === 0) {
    return (
      <div className="flex flex-col gap-y-5 pt-5">
        <InfoUserAndMoney
          nameUser={userData.name}
          text="Carteiras de"
          walletValue={userData.balance}
          percentChange={userData.rentability}
          textPts="Total das carteiras"
        />
        <p>Você não possui carteiras.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-5 pt-5">
      <InfoUserAndMoney
        nameUser={userData.name}
        text="Carteiras de"
        walletValue={userData.balance}
        percentChange={userData.rentability}
        textPts="Total das carteiras"
      />
      <div className="flex items-center justify-center bg-red-500 min-h-60">
        <p>local do gráfico</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {wallets.map((wallet) => {
          const images = Array.isArray(wallet.items)
            ? wallet.items.map((item) => item.stock_img)
            : [];
          return (
            <Wallets
              key={String(wallet.id)}
              name={String(wallet.name)}
              price={Number(wallet.total)}
              growth={Number(wallet.rentability)}
              id={String(wallet.name)}
              images={images}
            />
          );
        })}
      </div>
    </div>
  );
}
