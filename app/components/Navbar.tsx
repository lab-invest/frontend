import { useFetcher, useLocation } from "@remix-run/react";

interface ButtonsNavbarProps {
  href: string;
  text: string;
}

interface NavbarProps {
  name: string;
}

function ButtonsNavbar({ href, text }: ButtonsNavbarProps) {
  const location = useLocation();
  const pathname = location.pathname;
  let color = "bg-gray";

  if (pathname === href) {
    color = "bg-purple-600";
  }

  return (
    <a href={href}>
      <div className="flex items-center mt-7">
        <div className={`w-1 h-1 mr-5 ${color}`}></div>
        <p className="text-gray text-sm lg:text-lg mr-4">{text}</p>
      </div>
    </a>
  );
}

export default function Navbar({ name }: NavbarProps) {
  const fetcher = useFetcher();

  const buttons = [
    { href: "/home", text: "Home" },
    { href: "/action", text: "Ações" },
    { href: "/wallet", text: "Carteiras" },
    { href: "/help", text: "Ajuda" },
  ];

  return (
    <nav className="pl-10 pb-10 pr-6 w-1/5 h-full bg-secondary">
      <div className="flex flex-col pt-4 h-full justify-between">
        <div>
          {buttons.map((button) => (
            <ButtonsNavbar
              key={button.href}
              href={button.href}
              text={button.text}
            ></ButtonsNavbar>
          ))}
        </div>
        <div className="flex h-full py-10 items-end">
          <ButtonsNavbar href="/Settings" text="Configurações"></ButtonsNavbar>
        </div>
        <div className="flex">
          <div className="w-10 h-10 mr-2 rounded-full border">
            <img
              src="https://img.freepik.com/fotos-gratis/besta-de-dragao-mitico-no-estilo-anime_23-2151112832.jpg"
              alt="teste"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <p className="text-white font-medium">{name}</p>
            <div className="flex text-gray underline text-xs">
              <fetcher.Form action="/logout" method="post">
                <button type="submit">
                  <p>Sair</p>
                </button>
              </fetcher.Form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
