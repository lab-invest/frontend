import { MetaFunction } from "@remix-run/react";
import { Layout, QuestionBox } from "~/components";
import { simpleLoader } from "~/loader/simpleLoader";

export const meta: MetaFunction = () => {
  return [{ title: "Ajuda" }];
};

export const loader = simpleLoader;

export default function Help() {
  const faq = [
    {
      question: "Quais são os melhores tipos de investimento para iniciantes?",
      answer:
        "Para quem está começando, é importante focar em investimentos mais seguros e previsíveis. Aplicações como títulos de renda fixa, fundos de investimento e ETFs são boas opções. Eles oferecem um equilíbrio entre risco e retorno, ajudando você a aprender enquanto constrói sua confiança no mercado.",
    },
    {
      question: "Como posso acompanhar o desempenho dos meus investimentos?",
      answer:
        "Acompanhar o desempenho dos seus investimentos é essencial para ajustar suas estratégias e metas. Em nosso site, você encontrará ferramentas e gráficos que permitem visualizar o crescimento de seus ativos. Além disso, recomendamos revisar periodicamente seus investimentos e mantê-los alinhados com seus objetivos de longo prazo.",
    },
    {
      question: "Quanto dinheiro eu preciso para começar a investir?",
      answer:
        "Você não precisa de uma grande quantia para começar. Muitos investimentos têm valores mínimos baixos, como R$ 100 ou até menos. O importante é começar com o que você tem e criar o hábito de investir regularmente, mesmo que sejam pequenas quantias.",
    },
    {
      question: "Como posso reduzir o risco dos meus investimentos?",
      answer:
        "Uma das melhores formas de reduzir o risco é diversificando sua carteira de investimentos. Isso significa distribuir seu dinheiro em diferentes tipos de ativos, como ações, títulos de renda fixa e fundos. Dessa forma, você protege sua carteira de oscilações em um único tipo de ativo ou setor.",
    },
    {
      question: "Como posso saber se estou fazendo um bom investimento?",
      answer:
        "Um bom investimento é aquele que está alinhado com seus objetivos financeiros e seu perfil de risco. Em nosso site, oferecemos ferramentas que ajudam você a entender melhor seus investimentos e tomar decisões informadas. Lembre-se, um bom investimento não é apenas aquele que gera alto retorno, mas também o que proporciona segurança e estabilidade ao longo do tempo.",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-evenly h-full">
        {faq.map((item, index) => (
          <div key={index}>
            <QuestionBox
              question={item.question}
              answer={item.answer}
              className={index === 0 ? "mt-0" : "mt-8"}
            />
            <hr className="mt-5 text-third" />
          </div>
        ))}
      </div>
    </Layout>
  );
}
