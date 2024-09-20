import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { Navbar } from "~/components";
import { ensureAuthenticated } from "~/utils/session.server";
import Configs from "~/components/Configs"; // Importe o componente Configs

export const meta: MetaFunction = () => {
  return [{ title: "Carteiras" }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await ensureAuthenticated(request);
};

export default function Config() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col w-full bg-primary px-10 py-6 gap-4">
        <h1 className="text-white font-semibold text-2xl">Configurações</h1>
        <div className="flex">
          <div className="flex flex-col w-2/3 gap-4">
            <Configs name="Nome completo" description="Giovanna Bregantin" />
            <Configs name="Senha" description="***************" />
            <Configs name="Data Nascimento" description="20/11/2006" />
            <Configs name="Resetar conta" description="Ao fazer isso todos os dados da sua conta serão redefinidos" />
            <Configs name="Deletar conta" description="Ao fazer isso sua conta será totalmente apagada" isDestructive={true} />
          </div>
          <div className="flex flex-col items-center w-1/3 gap-4">
            <img
              src="path_to_profile_image"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600">
              <span role="img" aria-label="camera">📷</span>
              ADD A NEW PERFIL IMAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
