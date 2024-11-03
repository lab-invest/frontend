import { json, redirect } from "@remix-run/node";
import AppData from "~/services/appData";
import { getSession, getUser, sessionStorage } from "~/utils/session.server";

const CACHE_DURATION = 1 * 60 * 5000;

export const simpleLoader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const session = await getSession(request);

  const cachedData = session.get("userData");
  const lastUpdated = session.get("lastUpdated");

  const now = Date.now();

  if (cachedData && lastUpdated && now - lastUpdated < CACHE_DURATION) {
    return json({ userData: cachedData });
  }

  const userDataGet = new AppData();

  try {
    const userData = await userDataGet.getUserData(user.uid);

    session.set("userData", userData);
    session.set("lastUpdated", now);

    return json(
      { userData },
      {
        headers: {
          "Set-Cookie": await sessionStorage.commitSession(session),
        },
      }
    );
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw new Response("Erro ao buscar dados do usuário", { status: 500 });
  }
};
