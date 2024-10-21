import { MetaFunction, useLoaderData } from "@remix-run/react";
import { ConfigOptions, Layout, ProfileImage } from "~/components";
import { simpleLoader } from "~/loader/simpleLoader";
import { UserData } from "~/types/userData";

export const meta: MetaFunction = () => {
  return [{ title: "Carteiras" }];
};

export const loader = simpleLoader;

export default function Config() {
  const loaderData = useLoaderData<{ userData: UserData }>();
  const userData = loaderData.userData;

  return (
    <Layout userData={userData} className="gap-4">
      <h1 className="text-2xl font-semibold text-white">Configurações</h1>
      <div className="flex">
        <div className="flex flex-col justify-between w-full min-h-[500px]">
          <ConfigOptions
            name="Nome completo"
            textButton="Alterar"
            description="Giovanna Bregantin"
          />
          <ConfigOptions
            name="Password"
            textButton="Alterar"
            description="************"
          />
          <ConfigOptions
            name="Data Nascimento"
            textButton="Alterar"
            description="20/11/2006"
          />
          <ConfigOptions
            name="Reset Account"
            textButton="Resetar"
            description="Ao fazer isso todos os dados da sua conta serão redefinidos"
          />
          <ConfigOptions
            name="Delete Account"
            textButton="Deletar"
            description="Ao fazer isso sua conta será totalmente apagada"
            isDestructive
          />
        </div>
        <ProfileImage imageUrl="https://blog.casadoprodutor.com.br/wp-content/uploads/2018/04/gatinho.jpg" />
      </div>
    </Layout>
  );
}
