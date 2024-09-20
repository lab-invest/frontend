import { LoaderFunctionArgs } from "@remix-run/node";
import { ensureAuthenticated } from "~/utils/session.server";

async function getUserData(uid: string) {
  try {
    const response = await fetch(`http://localhost:3000/user/get?uid=${uid}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados do usuário");
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userSession = await ensureAuthenticated(request);

  const uid = userSession.name;

  if (uid) {
    const userData = await getUserData(uid);
    return { userData, userSession };
  } else {
    throw new Response("Usuário não autenticado", { status: 401 });
  }
};
