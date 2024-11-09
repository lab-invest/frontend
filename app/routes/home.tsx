import { MetaFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
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

type ActionItem = {
  nome: string;
  rentabilidade: number;
  imagem: string;
  max: number;
  minimo: number;
  volume: number;
  abertura: number;
  fechamento: number;
  preco_atual: number;
};

type stockPage = {
  ibov_points: number;
  ibov_rent: number;
  additional_data: {
    items: ActionItem[];
  };
};

export const loader = homeLoader;

export default function Home() {
  const loaderData = useLoaderData<{
    userData: UserData;
    stockpage: stockPage;
  }>();
  const navigate = useNavigate();

  const { userData } = loaderData;
  const { stockpage } = loaderData;
  const wallets = userData.wallets?.wallets || [];

  const handleSearchClick = () => {
    navigate("/action/search");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleSearchClick();
    }
  };

  if (!wallets || wallets.length === 0) {
    return (
      <Layout userData={userData} className="gap-y-5">
        <div className="relative">
          <Searchbar />
        </div>
        <BoxVariation additionalData={stockpage.additional_data} />
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
        <div className="relative">
          <Searchbar />
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={handleSearchClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label="Search actions"
          />
        </div>
        <BoxVariation additionalData={stockpage.additional_data} />
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
