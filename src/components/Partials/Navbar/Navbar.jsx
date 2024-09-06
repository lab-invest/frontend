"use client";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import NavButton from "./NavButton";

export function Navbar() {
  const router = useRouter();

  console.log(router.pathname);

  function submiLogout() {
    deleteCookie("user");
    router.push("/");
  }

  return (
    <nav className="pl-10 pt-2 pb-2 pr-6 h-full bg-secondary">
      <div className=" h-3/4 flex flex-col">
        {NavButton("/home", "Home")}
        {NavButton("/actions", "Ações")}
        {NavButton("/wallets", "Carteiras")}

        {NavButton("/help", "Help")}
      </div>

      <div className="flex flex-col justify-evenly h-1/4">
        <div>{NavButton("/settings", "Configurações")}</div>
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
              <button className="mr-2" onClick={submiLogout}>
                <p>Sair</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
