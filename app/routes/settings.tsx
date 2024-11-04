import { MetaFunction, useLoaderData } from "@remix-run/react";
import { ConfigOptions, Layout, ProfileImage, ConfigPopupUnit, ConfigPopup } from "~/components";
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
            description={userData.name}
            isDestructive={false}
            hideButton={false}
            action="Nome"
            popupName="Alterar nome completo"
            popupDescription="Adicione suas informações aqui. Clique em concluir quando estiver pronto."
          />
          <ConfigOptions
            name="Senha"
            textButton="Alterar"
            description="************"
            isDestructive={false}
            hideButton={false}
            action="Senha"
            popupName="Alterar Senha"
            popupDescription="Ao clicar em continuar, vocÊ receberá um email para alterar sua senha."
          />
          <ConfigOptions
            name="Data de Nascimento"
            textButton="Alterar"
            description={userData.birth_date}
            isDestructive={false}
            hideButton={true}
            action=""
            popupName=""
            popupDescription=""
          />
          <ConfigOptions
            name="Resetar Conta"
            textButton="Resetar"
            description="Ao fazer isso todos os dados da sua conta serão redefinidos"
            isDestructive={false}
            hideButton={false}
            action="Resetar"
            popupName="Resetar Conta"
            popupDescription="Ao fazer isso sua conta será totalmente resetada."
          />
          <ConfigOptions
            name="Deletar Conta"
            textButton="Deletar"
            description="Ao fazer isso sua conta será totalmente deletada."
            isDestructive={true}
            hideButton={false}
            action="Deletar"
            popupName="Deletar Conta"
            popupDescription="Ao fazer isso sua conta será totalmente Deletada."
          />
        </div>
        <ProfileImage imageUrl={userData.user_photo} />
      </div>
    </Layout>
  );
}
