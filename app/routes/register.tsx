import { MetaFunction, useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { registerAction } from "~/actions/registerAction";
import { Box, Button, Textfield, Toast } from "~/components";

interface FetcherData {
  error?: string;
  message?: string;
}

export const meta: MetaFunction = () => {
  return [{ title: "Cadastro" }];
};

export const action = registerAction;

export default function Register() {
  const fetcher = useFetcher<FetcherData>();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const handleCloseToast = () => setShowToast(false);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      setToastMessage(fetcher.data.error || fetcher.data.message || "");
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-[url('/images/Register.png')] bg-cover bg-center">
      <Box>
        <p className="text-center">Cadastre-se agora!</p>
        <fetcher.Form action="/register" method="post">
          <div className="flex flex-col gap-y-3">
            <Textfield
              name="name"
              labelText="Nome completo"
              type="text"
              placeholder="Nome completo"
            />
            <Textfield
              type="text"
              maxLength={10}
              placeholder="00/00/0000"
              name="birth"
              labelText="Data de nascimento"
            />
            <Textfield
              type="text"
              maxLength={14}
              placeholder="000.000.000-00"
              name="Cpf"
              labelText="Cpf"
            />
            <Textfield
              type="email"
              placeholder="insira seu email"
              name="email"
              labelText="Email"
            />
            <Textfield
              type="text"
              placeholder="insira sua senha"
              name="password"
              labelText="Senha"
            />
            <Textfield
              type="text"
              placeholder="Confirme sua senha"
              name="confirmPassword"
              labelText="Confirme sua senha"
            />
            <div className="pt-4">
              <Button text="Criar conta" variant="active" type="submit" />
            </div>
          </div>
        </fetcher.Form>
      </Box>
      <Toast
        message={toastMessage}
        show={showToast}
        onClose={handleCloseToast}
        variant={fetcher.data?.error ? "error" : "success"}
      />
    </main>
  );
}
