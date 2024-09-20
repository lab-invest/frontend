import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { Navbar } from "~/components";
import Configs from "~/components/Configs";
import ProfileImage from "~/components/ProfileImage";
import { ensureAuthenticated } from "~/utils/session.server";

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
      <div className="flex flex-col bg-primary w-full px-10 gap-4 pt-6">
        <h1 className="text-3xl font-semibold text-white">Configurações</h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-full">
            <Configs name="Nome completo" description="Giovanna Bregantin" />
            <Configs name="Password" description="************" />
            <Configs name="Data Nascimento" description="20/11/2006" />
            <Configs name="Reset Account" description="Ao fazer isso todos os dados da sua conta serão redefinidos" />
            <Configs name="Delete Account" description="Ao fazer isso sua conta será totalmente apagada" isDestructive />
          </div>
          <div className="w-2/4 flex justify-center items-center">
            <ProfileImage imageUrl="https://blog.casadoprodutor.com.br/wp-content/uploads/2018/04/gatinho.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
