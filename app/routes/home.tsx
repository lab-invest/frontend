import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  BoxVariation,
  InfoUserAndMoney,
  Layout,
  Searchbar,
  Wallets,
} from "~/components";
import { homeLoader } from "~/loader/homeLoader";
import { UserData } from "~/types/userData";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export const loader = homeLoader;

export default function Home() {
  const loaderData = useLoaderData<{ userData: UserData }>();

  const { userData } = loaderData;
  const wallets = userData.wallets.wallets;

  if (!wallets || wallets.length === 0) {
    return (
      <Layout userData={userData} className="gap-y-5">
        <Searchbar />
        <BoxVariation />
        <div className="py-5">
          <InfoUserAndMoney
            percentChange={userData.rentability}
            text="Bem vindo"
            nameUser={userData.name}
            walletValue={userData.balance}
            textPts="Todas as carteiras"
          />
        </div>
        <p className="text-center text-white">Você não possui carteiras.</p>
      </Layout>
    );
  }

  const firstThreeWallets = wallets.slice(0, 3);

  return (
    <>
      <Layout userData={userData} className="gap-y-5">
        <Searchbar />
        <BoxVariation />
        <div className="py-5">
          <InfoUserAndMoney
            percentChange={userData.rentability}
            text="Bem vindo"
            nameUser={userData.name}
            walletValue={userData.balance}
            textPts="Todas as carteiras"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {firstThreeWallets.map((wallet) => {
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
      </Layout>
    </>
  );
}
