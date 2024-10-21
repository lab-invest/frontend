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
        <Wallets growth={20} id="3" name="teste" price={230} />
        <Wallets growth={20} id="3" name="teste" price={230} />
        <Wallets growth={20} id="3" name="teste" price={230} />
        <Wallets growth={20} id="3" name="teste" price={230} />
      </div>
    </Layout>
  );
}
