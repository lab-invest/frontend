// Importações necessárias
import { useLoaderData } from "@remix-run/react";
import {
  BoxVariation,
  InfoActionPoints,
  Searchbar,
  SpecActions,
} from "~/components";
import { actionsLoader } from "~/loader/actionsLoader";
import { useState } from "react";

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

type LoaderData = {
  ibov_points: number;
  ibov_rent: number;
  additional_data: {
    items: ActionItem[];
  };
};

export const loader = actionsLoader;

export default function SearchAction() {
  const data = useLoaderData<LoaderData>();

  const ibovPoints = data.ibov_points;
  const ibovRent = data.ibov_rent;
  const items = data.additional_data.items;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter(action =>
    action.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-y-5">
      <Searchbar onSearchChange={setSearchTerm} />
      <BoxVariation />
      <InfoActionPoints
        textPts={`IBOVESPA`}
        valueAction={ibovRent}
        pointValue={ibovPoints}
        hasPercentual
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 place-items-center">
        {filteredItems.map((action) => (
          <SpecActions
            key={action.nome}
            actionName={action.nome}
            valueAction={action.preco_atual}
            actionImage={action.imagem}
            open={action.abertura}
            close={action.fechamento}
            high={action.max}
            low={action.minimo}
            volume={action.volume}
          />
        ))}
      </div>
    </div>
  );
}