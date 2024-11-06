export default function MyWallets() {
  const loaderData = useLoaderData<{ userData: UserData }>();
  const { userData } = loaderData;

  // Verificando se userData ou walletComparision estão indefinidos ou vazios
  if (!userData || !userData.wallets || userData.wallets.length === 0) {
    return (
      <div className="flex flex-col gap-y-5 pt-5">
        <InfoUserAndMoney
          nameUser={userData ? userData.name : 'Usuário'}
          text="Carteiras de"
          walletValue={userData ? userData.balance : 0}
          percentChange={userData ? userData.rentability : 0}
          textPts="Total das carteiras"
        />
        <p>Você não possui carteiras.</p>
      </div>
    );
  }

  const { walletComparision } = useLoaderData<{ walletComparision: WalletData[] }>();

  const [isClient, setIsClient] = useState(false);
  const [Chart, setChart] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    setIsClient(true);
    import("react-apexcharts").then((module) => {
      setChart(() => module.default);
    });
  }, []);

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
        {walletComparision.map((wallet) => {
          const images = Array.isArray(wallet.items)
            ? wallet.items.map((item) => item.stock_img)
            : [];
          return (
            <Wallets
              key={String(wallet.id)}
              name={String(wallet.wallet_name)}
              price={Number(wallet.total)}
              growth={Number(wallet.rentability)}
              id={String(wallet.wallet_name)}
              images={images}
            />
          );
        })}
      </div>
    </div>
  );
}
