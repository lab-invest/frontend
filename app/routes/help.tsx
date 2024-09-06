import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { Navbar } from "~/components";
import Question from "~/components/Questions";
import { ensureAuthenticated } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return [{ title: "Ajuda" }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await ensureAuthenticated(request);
};

export default function Help() {
  const faq = [
    {
      question: "Como posso aprender a investir nesse site?",
      answer: "Explorar o mundo dos investimentos pode ser desafiador, mas estamos aqui para ajudar. Nosso site oferece uma variedade de recursos, guias e ferramentas que tornam o aprendizado acessível e envolvente. Queremos que você se sinta confiante em cada decisão de investimento que tomar."
    },
    {
      question: "Por onde começar?",
      answer: "O primeiro passo para se tornar um investidor é compreender os conceitos básicos. Navegue lugares na web que tenham seção de aprendizado para acessar materiais desenvolvidos para iniciantes. Não se preocupe, você não precisa ser um especialista para começar!"
    },
    {
      question: "Quais são os erros mais comuns ao investir?",
      answer: "Investir pode parecer simples, mas existem armadilhas comuns que podem comprometer seus resultados. Muitos investidores iniciantes subestimam a importância da diversificação ou se deixam levar por emoções em momentos de alta volatilidade. Aqui é um ambiente seguro para você aprender errando, embarque conosco nessa jornada!"
    }
  ];

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col bg-primary w-full px-10 gap-4 pt-6">
        {faq.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
