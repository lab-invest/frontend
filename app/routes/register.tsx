import { MetaFunction, redirect, useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { registerAction } from "~/actions/registerAction";
import { Box, Button, Loading, Textfield, Toast } from "~/components";

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

  const [formValues, setFormValues] = useState({
    name: "",
    birth: "",
    Cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setError] = useState({
    name: "",
    birth: "",
    Cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    birth: false,
    Cpf: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      setToastMessage(fetcher.data.error || fetcher.data.message || "");
      setShowToast(true);

      if (fetcher.data.message) {
        redirect("/login");
      }

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fetcher.state, fetcher.data]);

  useEffect(() => {
    if (touched.name && formValues.name.length < 3) {
      setError((prev) => ({ ...prev, name: "Nome inválido" }));
    } else if (touched.name) {
      setError((prev) => ({ ...prev, name: "" }));
    }

    if (touched.birth && formValues.birth === "") {
      setError((prev) => ({ ...prev, birth: "Data de nascimento inválida" }));
    } else if (touched.birth) {
      setError((prev) => ({ ...prev, birth: "" }));
    }

    if (touched.Cpf && formValues.Cpf.length < 14) {
      setError((prev) => ({ ...prev, Cpf: "CPF inválido" }));
    } else if (touched.Cpf) {
      setError((prev) => ({ ...prev, Cpf: "" }));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (touched.email && !emailRegex.test(formValues.email)) {
      setError((prev) => ({ ...prev, email: "Email inválido" }));
    } else if (touched.email) {
      setError((prev) => ({ ...prev, email: "" }));
    }

    if (touched.password && formValues.password.length < 6) {
      setError((prev) => ({ ...prev, password: "Senha muito curta" }));
    } else if (touched.password) {
      setError((prev) => ({ ...prev, password: "" }));
    }

    if (
      touched.confirmPassword &&
      formValues.confirmPassword !== formValues.password
    ) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "As senhas não correspondem",
      }));
    } else if (touched.confirmPassword) {
      setError((prev) => ({ ...prev, confirmPassword: "" }));
    }
  }, [formValues, touched]);

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setFormValues({ ...formValues, Cpf: value });
  };

  return (
    <>
      {fetcher.state != "idle" && <Loading />}
      <main className="flex items-center justify-center min-h-screen bg-[url('/images/Register.png')] bg-cover bg-center">
        <Box>
          <p className="text-center">Cadastre-se agora!</p>
          <fetcher.Form action="/register" method="post">
            <div className="flex flex-col gap-y-3">
              <div>
                <Textfield
                  name="name"
                  labelText="Nome completo"
                  type="text"
                  value={formValues.name}
                  placeholder="Nome completo"
                  onChange={(e) => {
                    setFormValues({ ...formValues, name: e.target.value });
                    setTouched((prev) => ({ ...prev, name: true }));
                  }}
                />
                {touched.name && formError.name && (
                  <p className="text-sm text-red-600">{formError.name}</p>
                )}
              </div>
              <div>
                <Textfield
                  type="date"
                  maxLength={10}
                  placeholder="00/00/0000"
                  value={formValues.birth}
                  name="birth"
                  labelText="Data de nascimento"
                  onChange={(e) => {
                    setFormValues({ ...formValues, birth: e.target.value });
                    setTouched((prev) => ({ ...prev, birth: true }));
                  }}
                />
                {touched.birth && formError.birth && (
                  <p className="text-sm text-red-600">{formError.birth}</p>
                )}
              </div>
              <Textfield
                type="text"
                maxLength={14}
                placeholder="000.000.000-00"
                name="Cpf"
                value={formValues.Cpf}
                labelText="Cpf"
                onChange={(e) => {
                  handleCpfChange(e);
                  setTouched((prev) => ({ ...prev, Cpf: true }));
                }}
              />
              {touched.Cpf && formError.Cpf && (
                <p className="text-sm text-red-600">{formError.Cpf}</p>
              )}
              <Textfield
                type="email"
                placeholder="insira seu email"
                name="email"
                value={formValues.email}
                labelText="Email"
                onChange={(e) => {
                  setFormValues({ ...formValues, email: e.target.value });
                  setTouched((prev) => ({ ...prev, email: true }));
                }}
              />
              {touched.email && formError.email && (
                <p className="text-sm text-red-600">{formError.email}</p>
              )}
              <Textfield
                type="password"
                placeholder="insira sua senha"
                name="password"
                value={formValues.password}
                labelText="Senha"
                onChange={(e) => {
                  setFormValues({ ...formValues, password: e.target.value });
                  setTouched((prev) => ({ ...prev, password: true }));
                }}
              />
              {touched.password && formError.password && (
                <p className="text-sm text-red-600">{formError.password}</p>
              )}
              <Textfield
                type="password"
                placeholder="Confirme sua senha"
                name="confirmPassword"
                value={formValues.confirmPassword}
                labelText="Confirme sua senha"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    confirmPassword: e.target.value,
                  });
                  setTouched((prev) => ({ ...prev, confirmPassword: true }));
                }}
              />
              {touched.confirmPassword && formError.confirmPassword && (
                <p className="text-sm text-red-600">
                  {formError.confirmPassword}
                </p>
              )}
              <div className="pt-4">
                <Button text="Criar conta" variant="active" type="submit" />
              </div>
              <div className="flex justify-center text-sm">
                <p className="text-purple-500">
                  <span className="text-black">Já possui uma conta? </span>
                  <a href="/login">entre agora!</a>
                </p>
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
    </>
  );
}
