
interface ConfigOptionsProps {
    action: string;
    name: string;
    description: string;
    isDestructive?: boolean;
}
  

export default function ConfigPopup({
    action,
    name,
    description,
    isDestructive = false,
  }: ConfigOptionsProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-zinc-800 w-2/5 p-6 rounded-lg shadow-md">
                <h2 className="text-white text-lg font-semibold mb-2">{name}</h2>
                <p className="text-gray mb-4">{description}</p>

                <form>

                    <div className="flex justify-center space-x-4">
                        <button 
                            type="button" 
                            className="px-4 py-2 rounded-md border border-white text-white hover:bg-gray-700">
                            Cancelar
                        </button>
                        <button 
                            className={`px-4 py-2 rounded-md text-white
                                ${
                                    isDestructive
                                        ? "bg-red-600 hover:bg-red-700 w-24"
                                        : "bg-purple-600 hover:bg-purple-700"
                                }`
                            }>
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
