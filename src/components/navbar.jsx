import { searchicon } from "../icons/seachIcon";

export function navbar() {
    return (
      <div className="w-78 h-screen bg-secondary">
        <div className="pl-16 mt-12">
          <div className="flex items-center mt-12">
            <div className="w-1.5 h-1.5 bg-gray mr-10"></div>
            <p className="text-gray text-xl">Home</p>
          </div>
          <div className="flex items-center mt-10">
            <div className="w-1.5 h-1.5 bg-gray mr-10"></div>
            <p className="text-gray text-xl">Ações</p>
          </div>
          <div className="flex items-center mt-10">
            <div className="w-1.5 h-1.5 bg-gray mr-10"></div>
            <p className="text-gray text-xl">Carteiras</p>
          </div>
          <div className="flex items-center mt-10">
            <div className="w-1.5 h-1.5 bg-gray mr-10"></div>
            <p className="text-gray text-xl">Ajuda</p>
          </div>
          <div className="flex items-center mt-40">
            <div className="w-1.5 h-1.5 bg-gray mr-10 mt-14"></div>
            <p className="text-gray text-xl mt-14">Configurações</p>
          </div>
        </div>
        <div className="w-78 h-20 mt-11 flex">
          <img src="" alt="" className="rounded-bl-full h-10 w-10 ml-6 mr-8 mt-4" />
          <div className="mt-4">
            <p className="text-white font-medium">Giovanna</p>
            <div className="flex text-gray underline text-sm mt-1">
              <p className="mr-2">Sair</p>
              <p>Trocar de conta</p>
            </div>
          </div>
        </div>
      </div>
    );
  }