import type { MetaFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Box, Button, Textfield, Toast } from "~/components";
import { resetPassowrd } from "~/utils/session.server";

interface FetcherData {
  error?: string;
}

export const meta: MetaFunction = () => {
  return [{ title: "Resetar senha" }];
};

export const action = async (request: Request) => {
  const formData = await request.formData();
  const email = formData.get("email");
  return resetPassowrd(email as string);
};

export default function Login() {
  const fetcher = useFetcher<FetcherData>();
  const [showToast, setShowToast] = useState(false);
  const handleCloseToast = () => setShowToast(false);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
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
        <h3 className="text-base font-semibold text-center">
          Mude a sua senha agora!
        </h3>
        <fetcher.Form action="/login" method="post">
          <div className="flex flex-col gap-y-4">
            <div>
              <Textfield
                labelText="Email"
                placeholder="Insira seu email"
                type="email"
                name="email"
                isDisabled={false}
              />
              <p className="text-xs pt-4">
                Ao solicitar o codigo entre no seu email e redefina sua senha.
              </p>
            </div>
            <Button text="Enviar email" variant="active" type="submit" />
          </div>
        </fetcher.Form>
        <p className="text-xs font-light text-center text-gray-400">
          Já tem uma conta?{" "}
          <a
            href="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Entre agora!
          </a>
        </p>
      </Box>

      <Toast
        message="email enviado!"
        show={showToast}
        onClose={handleCloseToast}
        variant="success"
      />
    </main>
  );
}
