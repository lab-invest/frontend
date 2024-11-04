 
export default function ConfigPopupUnit() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-zinc-800 w-2/5 p-6 rounded-lg shadow-md">
                <h2 className="text-white text-lg font-semibold mb-2">Editar nome</h2>
                <p className="text-gray mb-4">Adicione suas informações aqui. Clique em concluir quando estiver pronto.</p>

                <form>
                    <div className="flex items-center mb-4">
                        <label className="text-gray mr-4" htmlFor="name">Nome</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="|"
                            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button 
                            type="button" 
                            className="px-4 py-2 rounded-md border border-white text-white hover:bg-gray-700">
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700">
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
