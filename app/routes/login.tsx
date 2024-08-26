import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { json, useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Box, Button, Textfield, Toast } from "~/components";
import { createUserSession } from "~/utils/session.server";

interface FetcherData {
  error?: string;
}

export const meta: MetaFunction = () => {
  return [{ title: "Login" }];
};

// TODO: ARRUMAR ESSA PARTE
// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   return await ensureAuthenticated(request);
// };

export const action: ActionFunction = async ({ request }) => {
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

export default function Login() {
  const fetcher = useFetcher<FetcherData>();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const handleCloseToast = () => setShowToast(false);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data && fetcher.data.error) {
      setToastMessage(fetcher.data.error);
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#252525]">
      <div className="bg-[url('/images/Register.png')] bg-cover bg-center w-screen absolute h-full" />
      <Box className="gap-y-6">
        <h3 className="text-base font-semibold text-center">
          Que bom te ver de novo!
        </h3>
        <fetcher.Form action="/login" method="post">
          <div className="flex flex-col gap-y-4">
            <Textfield
              labelText="Email"
              type="email"
              name="email"
              isDisabled={false}
            />
            <Textfield
              labelText="Senha"
              type="password"
              name="senha"
              isDisabled={false}
            />
            <div className="flex justify-end">
              <a
                href="/resetPassword"
                className="text-xs text-purple-600 hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </div>
            <Button text="Entrar" variant="active" type="submit" />
          </div>
        </fetcher.Form>
        <p className="text-xs font-light text-center text-gray-400">
          Não tem uma conta?{" "}
          <a
            href="/register"
            className="font-medium text-purple-600 hover:underline"
          >
            Se cadastre hoje
          </a>
        </p>
      </Box>

      <Toast
        message={toastMessage}
        show={showToast}
        onClose={handleCloseToast}
        variant="error"
      />
    </main>
  );
}
