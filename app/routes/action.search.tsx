// Importações necessárias
import { useLoaderData } from "@remix-run/react";
import {
  BoxVariation,
  InfoActionPoints,
  Searchbar,
  SpecActions,
} from "~/components";
import { actionsLoader } from "~/loader/actionsLoader";

// Definição dos tipos TypeScript
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

  return (
    <div className="flex flex-col gap-y-5">
      <Searchbar />
      <BoxVariation />
      <InfoActionPoints
        textPts={`IBOVESPA`}
        valueAction={ibovRent}
        pointValue={ibovPoints}
        hasPercentual
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 place-items-center">
        {items.map((action) => (
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
