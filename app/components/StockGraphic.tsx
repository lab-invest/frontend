import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { useEffect, useState } from "react";

export interface StockData {
  stocks: Array<{ [key: string]: { [date: string]: number } }>;
}

export default function StockGraphic({ stocks }: StockData) {
  const [isClient, setIsClient] = useState(false);
  const [Chart, setChart] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    setIsClient(true);
    import("react-apexcharts").then((module) => {
      setChart(() => module.default);
    });
  }, []);

  if (!stocks || stocks.length === 0) {
    return <div>No data available</div>;
  }

  const stockSymbols = stocks.map((stock) => Object.keys(stock)[0]);
  const dates = Array.from(
    new Set(
      stocks.map((stock) => Object.keys(stock[Object.keys(stock)[0]])).flat()
    )
  ).sort((a, b) => parseISO(a).getTime() - parseISO(b).getTime());

  // Normalize data
  const series = stockSymbols.map((symbol) => {
    const data = dates.map((date) => {
      const stock = stocks.find((s) => s[symbol]);
      return stock ? stock[symbol][date] : 0;
    });
    const initialValue = data[0];
    const normalizedData = data.map(
      (value) => ((value - initialValue) / initialValue) * 100
    );
    return { name: symbol, data: normalizedData };
  });

  // Calculate max absolute value for symmetric y-axis
  const allNormalizedValues = series.flatMap((s) => s.data);
  const maxAbsValue = Math.max(...allNormalizedValues.map((v) => Math.abs(v)));

  const options = {
    chart: {
      type: "line" as const,
      background: "#303030",
      toolbar: { show: false },
    },
    xaxis: {
      categories: dates.map((date) =>
        format(parseISO(date), "MMM/yy", { locale: ptBR })
      ),
      labels: { style: { colors: "#9ca3af" } },
    },
    yaxis: {
      min: -maxAbsValue,
      max: maxAbsValue,
      labels: {
        formatter: function (value: number) {
          return value.toFixed(2) + "%";
        },
        style: { colors: "#9ca3af" },
      },
    },
    stroke: {
      curve: "smooth" as const,
      dashArray: 5,
    },
    grid: {
      borderColor: "#374151",
    },
    colors: ["#d1d5db", "#a3e635", "#3b82f6", "#f59e0b", "#ef4444"],
    legend: {
      labels: {
        colors: "#ffffff",
      },
    },
  };

  return (
    <div className="bg-secondary p-4 rounded-lg w-full">
      {isClient && Chart ? (
        <Chart
          options={options}
          series={series}
          type="line"
          height={300}
          width="100%"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
