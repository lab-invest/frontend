import { json, redirect } from "@remix-run/node";
import AppData from "~/services/appData";
import { getUser } from "~/utils/session.server";

export const defaultLoader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);

  if (!user) {
    redirect("/login");
    throw new Response("User not found", { status: 404 });
  }

  const userData = new AppData();

  try {
    const retorno = await userData.getUserData(user.uid);
    return json({ retorno });
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw new Response("Erro ao buscar dados do usuário", { status: 500 });
  }
};
