import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import {
  BoxVariation,
  InfoUserAndMoney,
  Navbar,
  Searchbar,
  Wallets,
} from "~/components";
import { ensureAuthenticated } from "~/utils/session.server";
import data from "../api-simulations/wallets.json";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await ensureAuthenticated(request);
};

export default function Home() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col bg-primary w-full px-10 gap-4 pt-6">
        <Searchbar />
        <BoxVariation />
        <div className="pt-6">
          <InfoUserAndMoney text="Bem vindo" textPts="Todas as carteiras" />
        </div>
        <div className="flex justify-between pt-8">
          {data.slice(0, 3).map((wallet) => (
            <Wallets
              key={wallet.id}
              nameWallet={wallet.title}
              valueWallet={wallet.balance}
              variationWallet={wallet.variation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
