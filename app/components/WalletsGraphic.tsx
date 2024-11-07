import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface HistoryData {
  date: string;
  value: number;
}

interface WalletData {
  wallet_name: string;
  history: HistoryData[];
}

interface ActionGraphicProps {
  historical_data: WalletData[];
}

export default function WalletsGraphic({ historical_data }: ActionGraphicProps) {
  const [isClient, setIsClient] = useState(false);
  const [Chart, setChart] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    setIsClient(true);
    import("react-apexcharts").then((module) => {
      setChart(() => module.default);
    });
  }, []);

  // Verificação se historical_data existe e não é vazio
  if (!historical_data || historical_data.length === 0) {
    return <div>No data available</div>;
  }

  const dataKeys = historical_data[0]?.history.map(({ date }) =>
    format(parseISO(date), "MMM/yy", { locale: ptBR })
  );

  const series = historical_data.map((wallet) => ({
    name: wallet.wallet_name,
    data: wallet.history.map((item) => item.value),
  }));

  const options = {
    chart: {
      type: "line" as const,
      background: "#303030",
      toolbar: { show: false },
    },
    xaxis: {
      categories: dataKeys,
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
    colors: ["#d1d5db", "#a3e635", "#3b82f6"],
  };

  return (
    <div className="bg-secondary p-4 rounded-lg w-full">
      {isClient && Chart ? (
        <Chart options={options} series={series} type="line" height={300} width="100%" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
