import { useEffect, useState } from "react";
import Variation from "./variation";

// Interface para representar cada ação
interface ActionItem {
  nome: string;
  rentabilidade: number;
  imagem: string;
  max: number;
  minimo: number;
  volume: number;
  abertura: number;
  fechamento: number;
  preco_atual: number;
}

// Interface para representar os dados adicionais recebidos pelo componente
interface AdditionalData {
  items: ActionItem[];
}

// Props para o componente BoxVariation
interface BoxVariationProps {
  additionalData: AdditionalData;
}

// Função para renderizar as variações com base na largura da janela e na quantidade de ações
function addVariations(actions: ActionItem[], width: number) {
  let numVariations = 6; // Número padrão de ações a serem exibidas

  if (width > 1400) {
    numVariations = 8;
  } else if (width > 1200) {
    numVariations = 7;
  }

  // Seleciona o número adequado de ações com base na largura da janela
  const displayedActions = actions.slice(0, numVariations);

  return displayedActions.map((action, index) => (
    <Variation
      key={index}
      nameAction={action.nome}
      valueAction={action.rentabilidade}
    />
  ));
}

export default function BoxVariation({ additionalData }: BoxVariationProps) {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Define a largura inicial
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  // Verifica se os dados adicionais estão disponíveis
  if (!additionalData || !additionalData.items) {
    return <p>Carregando dados...</p>;
  }

  return (
    <div className="flex justify-between">
      {addVariations(additionalData.items, windowWidth)}
    </div>
  );
}
