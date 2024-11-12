import { MetaFunction, useFetcher, useLoaderData } from "@remix-run/react";
import { ConfigOptions, Layout, ProfileImage } from "~/components";
import { UserData } from "~/types/userData";

export const meta: MetaFunction = () => {
  return [{ title: "Carteiras" }];
};

export const loader = homeLoader;

import { ActionFunction, json } from "@remix-run/node";
import { useEffect, useState } from "react";
import { homeLoader } from "~/loader/homeLoader";
import AppData from "~/services/appData";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const actionType = formData.get("actionType");
  const uuid = formData.get("uuid");
  const sendData = new AppData();

  switch (actionType) {
    case "updateName": {
      try {
        const newName = formData.get("updateName");
        const sendNewName = sendData.updateUserName(
          String(uuid),
          String(newName)
        );
        return json({
          success: true,
          message: "Nome alterado com sucesso",
          sendNewName,
        });
      } catch (e) {
        return json(
          { success: false, error: "falha na request" },
          { status: 500 }
        );
      }
    }

    case "changePassword": {
      return console.log("updatePassword");
    }

    case "resetAccount": {
      const reset = sendData.resetAccount(String(uuid));
      return json({
        success: true,
        message: "Conta resetada com sucesso",
        reset,
      });
    }

    case "deleteAccount": {
      const deleteAccount = sendData.deleteUserAccount(String(uuid));
      return json({
        success: true,
        message: "Conta deletada com sucesso",
        deleteAccount,
      });
    }
  }

  return null;
};

export default function Config() {
  const loaderData = useLoaderData<{ userData: UserData }>();
  const userData = loaderData.userData;

  const fetcher = useFetcher<{ success?: boolean }>();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (fetcher.data?.success === true) {
      return setShowPopup(false);
    }
    return setShowPopup(true);
  }, [fetcher.data]);

  return (
    <Layout userData={userData} className="gap-4">
      <h1 className="text-2xl font-semibold text-white">Configurações</h1>
      <div className="flex">
        <div className="flex flex-col justify-between w-full min-h-[500px]">
          <ConfigOptions
            uuid={userData.uuid}
            name="Nome completo"
            textButton="Alterar"
            description={userData.name}
            isDestructive={false}
            hideButton={false}
            action="updateName"
            popupName="Alterar nome completo"
            showPopup2={showPopup}
            popupDescription="Adicione suas informações aqui. Clique em concluir quando estiver pronto."
          />
          <ConfigOptions
            uuid={userData.uuid}
            name="Senha"
            textButton="Alterar"
            description="************"
            isDestructive={false}
            hideButton={false}
            action="changePassword"
            popupName="Alterar Senha"
            popupDescription="Ao clicar em continuar, vocÊ receberá um email para alterar sua senha."
            showPopup2={showPopup}
          />
          <ConfigOptions
            uuid={userData.uuid}
            name="Data de Nascimento"
            textButton="Alterar"
            description={userData.birth_date}
            isDestructive={false}
            hideButton={true}
            action=""
            popupName=""
            popupDescription=""
            showPopup2={showPopup}
          />
          <ConfigOptions
            uuid={userData.uuid}
            name="Resetar Conta"
            textButton="Resetar"
            description="Ao fazer isso todos os dados da sua conta serão redefinidos"
            isDestructive={false}
            hideButton={false}
            action="resetAccount"
            showPopup2={showPopup}
            popupName="Resetar Conta"
            popupDescription="Ao fazer isso sua conta será totalmente resetada."
          />
          <ConfigOptions
            uuid={userData.uuid}
            name="Deletar Conta"
            textButton="Deletar"
            description="Ao fazer isso sua conta será totalmente deletada."
            isDestructive={true}
            hideButton={false}
            action="deleteAccount"
            popupName="Deletar Conta"
            showPopup2={showPopup}
            popupDescription="Ao fazer isso sua conta será totalmente Deletada."
          />
        </div>
        <ProfileImage imageUrl="https://i.im.ge/2024/11/07/kvIgn6.Group-48095491.png" />
      </div>
    </Layout>
  );
}
