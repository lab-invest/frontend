import { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import { createUserSession } from "~/utils/session.server";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("senha") as string;

  try {
    const session = await createUserSession(request, email, password);
    return session;
  } catch (error) {
    return json(
      { error: "Erro ao fazer login, verifique suas credenciais." },
      { status: 400 }
    );
  }
};
