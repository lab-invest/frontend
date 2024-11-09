import { json, redirect } from "@remix-run/node";
import AppData from "~/services/appData";
import { getSession, getUser, sessionStorage } from "~/utils/session.server";

export const homeLoader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);
  console.log("user", user);

  if (!user) {
    return redirect("/login");
  }

  const session = await getSession(request);
  const apiGet = new AppData();

  try {
    const userData = await apiGet.getUserData(user.uid);
    const stockpage = await apiGet.getStokpage();

    return json(
      {
        userData,
        stockpage,
      },
      {
        headers: {
          "Set-Cookie": await sessionStorage.commitSession(session),
        },
      }
    );
  } catch (error) {
    console.error("Erro ao buscar dados do usuário ou carteiras:", error);
    throw new Response("Erro ao buscar dados do usuário ou carteiras", {
      status: 500,
    });
  }
};
