import { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const birth = formData.get("birth") as string;
  const cpf = formData.get("Cpf") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  console.log(name, email, password, birth, cpf, confirmPassword);

  try {
    if (
      name != "" &&
      email != "" &&
      password != "" &&
      birth != "" &&
      cpf != "" &&
      confirmPassword != ""
    ) {
      if (password == confirmPassword) {
        return json({ message: "Cadastro realizado com sucesso!" });
      }
      return json({ error: "As senhas não coincidem." }, { status: 400 });
    }

    return json(
      { error: "Preencha todos os campos para realizar o cadastro." },
      { status: 400 }
    );
  } catch (error) {
    return json(
      {
        error:
          "Erro ao fazer o cadastro, verifique os dados digitados e tente novamente.",
      },
      { status: 400 }
    );
  }
};
