import { useLoaderData } from "@remix-run/react";
import { InfoUserAndMoney, Wallets } from "~/components";
import { homeLoader } from "~/loader/homeLoader";
import { UserData } from "~/types/userData";
import AppData from "~/services/appData";
import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { getSession, getUser, sessionStorage } from "~/utils/session.server";
import { WalletData } from "~/types/walletComparasion";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale"; // Importar locale em português

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const session = await getSession(request);
  const apiGet = new AppData();

  const url = new URL(request.url);
  const pathname = url.pathname;
  const segments = pathname.split("/");
  const actionName = segments[segments.length - 1];

  console.log("walletName extraído:", actionName);

  if (!actionName) {
    throw new Response("Nome da carteira não fornecido", { status: 400 });
  }

  try {
    const walletComparision = await apiGet.getWalletComparison(user.uid);
    console.log(walletComparision);

    return json(
      { walletComparision },
      {
        headers: {
          "Set-Cookie": await sessionStorage.commitSession(session),
        },
      }
    );
  } catch (error) {
    console.error("Erro ao buscar dados do usuário ou carteiras:", error);
    throw new Response("Erro ao buscar dados do usuário ou carteiras", {
      status: 500,
    });
  }
};

export default function MyWallets() {
  const loaderData = useLoaderData<{ userData: UserData }>();
  const { userData } = loaderData;
  const wallets = userData.wallets.wallets;
  const { walletComparision } = useLoaderData<{ walletComparision: WalletData[] }>();

  const [isClient, setIsClient] = useState(false);
  const [Chart, setChart] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    setIsClient(true);
    import("react-apexcharts").then((module) => {
      setChart(() => module.default);
    });
  }, []);

  // Verificação para garantir que walletComparision possui dados
  if (!walletComparision || walletComparision.length === 0) {
    return <div>No wallet comparison data available</div>;
  }

  const formatHistoricalData = (walletComparision: WalletData[]) => {
    return walletComparision.map((wallet) => {
      const dataKeys = wallet.history.map((entry) =>
        format(parseISO(entry.date), "MMM/yy", { locale: ptBR })
      );

      const dataValues = wallet.history.map((entry) => entry.value);

      return {
        name: wallet.wallet_name,
        data: dataValues,
        categories: dataKeys,
      };
    });
  };

  const options = {
    chart: {
      type: "line" as const,
      background: "#303030",
      toolbar: { show: false },
    },
    xaxis: {
      categories: walletComparision.length > 0 ? formatHistoricalData(walletComparision)[0].categories : [],
      labels: { style: { colors: "#9ca3af" } },
    },
    yaxis: {
      labels: { show: false },
    },
    stroke: {
      curve: "smooth" as const,
      dashArray: 5,
    },
    grid: {
      borderColor: "#374151",
    },
    colors: ["#d1d5db", "#6b7280"], // Customize as colors for multiple lines if needed
  };

  const series = formatHistoricalData(walletComparision);

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
        {isClient && Chart ? (
          <Chart options={options} series={series} type="line" height={300} width="100%" />
        ) : (
          <p>Loading Graph...</p>
        )}
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
