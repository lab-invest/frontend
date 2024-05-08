import { searchicon } from "../icons/seachIcon";
import Link from 'next/link'

export function navbar() {
    return (
      <div className="w-64 bg-secondary">
        <div className="mt-12 pl-10">
          <Link href="../pages/home">
            <div className="flex items-center mt-12">
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
          <Link href="">
            <div className="flex items-center mt-24">
              <div className="w-1 h-1 bg-gray mr-10 mt-14"></div>
              <p className="text-gray text-lg mt-14">Configurações</p>
            </div>
          </Link>
        </div>
        <div className="w-78 h-20 mt-11 flex">
          <img src="" alt="" className="rounded-bl-full h-10 w-10 ml-6 mr-8" />
          <div>
            <p className="text-white font-medium">Giovanna</p>
            <div className="flex text-gray underline text-xs">
              <p className="mr-2">Sair</p>
              <p>Trocar de conta</p>
            </div>
          </div>
        </div>
      </div>
    );
  }