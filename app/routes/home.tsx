import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  BoxVariation,
  InfoUserAndMoney,
  Layout,
  Searchbar,
  Wallets,
} from "~/components";
import { simpleLoader } from "~/loader/simpleLoader";
import { UserData } from "~/types/userData";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export const loader = simpleLoader;

export default function Home() {
  const loaderData = useLoaderData<{ userData: UserData }>();
  const userData = loaderData.userData;
  const wallets = userData.wallets;
  console.log(wallets);

  return (
    <Layout userData={userData} className="gap-y-5">
      <Searchbar />
      <BoxVariation />
      <InfoUserAndMoney
        percentChange={3}
        text="Bem vindo"
        nameUser={userData.name}
        walletValue={userData.balance}
        textPts="Todas as carteiras"
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {Object.keys(userData.wallets).map((walletName) => (
          <Wallets
            key={walletName}
            name={walletName}
            price={100} // Se você não deseja mostrar o preço para as carteiras
            growth={2} // Ajuste conforme necessário
            id={walletName} // Usar o nome como um identificador único
          />
        ))}
      </div>
    </Layout>
  );
}
