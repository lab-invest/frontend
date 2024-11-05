import { json, redirect } from "@remix-run/node";
import AppData from "~/services/appData";
import { getUser } from "~/utils/session.server";

export const actionsLoader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const apiGet = new AppData();

  try {
    const stockpage = await apiGet.getStokpage();
    return json(stockpage);
  } catch (error) {
    console.error("Erro ao buscar dados do usuário ou carteiras:", error);
    throw new Response("Erro ao buscar dados do usuário ou carteiras", {
      status: 500,
    });
  }
};
