import { MetaFunction } from "@remix-run/node";
import {
  BoxVariation,
  InfoUserAndMoney,
  Layout,
  Searchbar,
  Wallets,
} from "~/components";
import { simpleLoader } from "~/loader/simpleLoader";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export const loader = simpleLoader;

export default function Home() {
  // const { userData } = useLoaderData<{ userData: UserData }>();

  return (
    <Layout className="gap-y-5">
      <Searchbar />
      <BoxVariation />
      <InfoUserAndMoney
        percentChange={3}
        text="Bem vindo"
        // nameUser={userData.name}
        nameUser="Ismael"
        // walletValue={userData.balance}
        walletValue={1000}
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
