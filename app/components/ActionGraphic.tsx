import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns"; // Importar as funções da biblioteca

interface ActionGraphicProps {
  historical_data: {
    [key: string]: number;
  };
}

export default function ActionGraphic({ historical_data }: ActionGraphicProps) {
  const [isClient, setIsClient] = useState(false);
  const [Chart, setChart] = useState<React.ComponentType<any> | null>(null);
  
  // Formatando as chaves da data
  const dataKeys = Object.keys(historical_data).map(date => 
    format(parseISO(date), 'dd/MM/yyyy HH:mm') // Formato desejado
  );
  
  const dataValues = Object.values(historical_data);

  useEffect(() => {
    setIsClient(true);
    import("react-apexcharts").then((module) => {
      setChart(() => module.default);
    });
  }, []);

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
      labels: { style: { colors: "#9ca3af" } },
    },
    stroke: {
      curve: "smooth" as const,
      dashArray: 5,
    },
    grid: {
      borderColor: "#374151",
    },
    colors: ["#d1d5db"],
  };

  const series = [
    {
      name: "Data",
      data: dataValues,
    },
  ];

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
