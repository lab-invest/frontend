/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function navbar() {
  return (
    <div className="pl-10 pt-12 pb-2  h-full bg-secondary">
      <div className=" h-3/4 flex flex-col">
        <Link href="../pages/home">
          <div className="flex items-center">
            <div className="w-1 h-1 bg-gray mr-10"></div>
            <p className="text-gray text-lg">Home</p>
          </div>
        </Link>
        <Link href="../pages/actions">
          <div className="flex items-center mt-8">
            <div className="w-1 h-1 bg-gray mr-10"></div>
            <p className="text-gray text-lg">Ações</p>
          </div>
        </Link>
        <Link href="../pages/wallet">
          <div className="flex items-center mt-8">
            <div className="w-1 h-1 bg-gray mr-10"></div>
            <p className="text-gray text-lg">Carteiras</p>
          </div>
        </Link>
        <Link href="../pages/help">
          <div className="flex items-center mt-8">
            <div className="w-1 h-1 bg-gray mr-10"></div>
            <p className="text-gray text-lg">Ajuda</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-evenly h-1/4">
        <div>
          <Link href="">
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray mr-10"></div>
              <p className="text-gray text-lg">Configurações</p>
            </div>
          </Link>
        </div>
        <div className="flex">
          <div className="w-10 h-10 mr-8 rounded-full border">
            <img
              src="https://img.freepik.com/fotos-gratis/besta-de-dragao-mitico-no-estilo-anime_23-2151112832.jpg"
              alt="teste"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <p className="text-white font-medium">Giovanna</p>
            <div className="flex text-gray underline text-xs">
              <p className="mr-2">Sair</p>
              <p>Trocar de conta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
