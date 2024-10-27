import { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import AppData from "~/services/appData";
import { registerUser } from "~/utils/session.server";

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const birth = formData.get("birth") as string;
  const cpf = formData.get("Cpf") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  console.log(name, email, password, birth, cpf, confirmPassword);

  if (
    name != "" &&
    email != "" &&
    password != "" &&
    birth != "" &&
    cpf != "" &&
    confirmPassword != ""
  ) {
    if (password == confirmPassword) {
      const newUser = (await registerUser(email, password)) as {
        uid: string;
      };
      const uid = newUser.uid;
      const userData = new AppData();

      const register = await userData.createUserData({
        uid,
        cpf,
        name,
        email,
        password,
        birth,
      });

      console.log(register);
      return json({ message: "Cadastro realizado com sucesso!" });
    }
    return json({ error: "As senhas não coincidem." }, { status: 400 });
  }

  return json(
    { error: "Preencha todos os campos para realizar o cadastro." },
    { status: 400 }
  );
};
