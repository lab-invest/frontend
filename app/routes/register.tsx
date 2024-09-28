import { MetaFunction, useFetcher } from "@remix-run/react";
import { useState } from "react";
import { Box, Button } from "~/components";
import CustomInput from "~/components/Input";

interface FetcherData {
  error?: string;
}

export const meta: MetaFunction = () => {
  return [{ title: "Cadastro" }];
};

export default function Register() {
  const fetcher = useFetcher<FetcherData>();
  const [stage, setStage] = useState(true);
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");

  const handleStage = () => {
    setStage(!stage);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[url('/images/Register.png')] bg-cover bg-center">
      <Box>
        <p>Cadastre-se</p>
        <fetcher.Form action="/register" method="post">
          {stage ? (
            <div className="flex flex-col gap-y-4">
              <CustomInput
                label="Nome completo"
                type="text"
                placeholder="Nome e sobrenome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CustomInput
                label="Data de nascimento"
                type="text"
                placeholder="00/00/0000"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <CustomInput
                label="CPF"
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />

              <div className="pt-4">
                <Button
                  text="Continuar"
                  variant="active"
                  type="button"
                  onClickFunction={handleStage}
                />
              </div>
            </div>
          ) : (
            <>
              <p>teste</p>
            </>
          )}
        </fetcher.Form>
      </Box>
    </main>
  );
}
