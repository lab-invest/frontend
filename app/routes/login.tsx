import type { MetaFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { loginAction } from "~/actions/loginAction";
import { Box, Button, Textfield, Toast } from "~/components";

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

export const action = loginAction;

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
    <main className="flex items-center justify-center min-h-screen bg-[url('/images/Register.png')] bg-cover bg-center">
      <Box>
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
