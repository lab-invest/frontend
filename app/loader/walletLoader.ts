import { redirect, json } from "@remix-run/node";
import AppData from "~/services/appData";
import { getUser, getSession } from "~/utils/session.server";

export const loader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const session = await getSession(request);
  const apiGet = new AppData();

  const url = new URL(request.url);
  const pathname = url.pathname;
  const segments = pathname.split("/");
  const walletName = segments[segments.length - 1];

  console.log("walletName extraído:", walletName);

  try {
    const walletData = await apiGet.getWalletByName(user.uid, walletName);

    return json(
      {
        walletData,
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
