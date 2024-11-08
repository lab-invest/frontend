import { useState } from "react";
import AppData from "~/services/appData";

interface ConfigOptionsUnitProps {
    uuid: string;
}

export default function ConfigPopupUnit({ uuid }: ConfigOptionsUnitProps) {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiPatch = new AppData();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiPatch.patchUserName(uuid, name);
      console.log(response)
    } catch (err) {
      setError("Erro ao enviar a requisição." + err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-zinc-800 w-2/5 p-6 rounded-lg shadow-md">
        <h2 className="text-white text-lg font-semibold mb-2">Editar nome</h2>
        <p className="text-gray mb-4">Adicione suas informações aqui. Clique em concluir quando estiver pronto.</p>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <label className="text-gray mr-4" htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="|"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="px-4 py-2 rounded-md border border-white text-white hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Carregando..." : "Continuar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
