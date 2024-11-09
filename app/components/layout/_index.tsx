import { useFetcher } from "@remix-run/react";
import { UserData } from "~/types/userData";
import Loading from "../Loading";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  userData: UserData;
}

export default function Layout({ children, className, userData }: LayoutProps) {
  const data = userData;
  const fetcher = useFetcher();

  return (
    <main className="flex h-screen w-screen">
      {fetcher.state === "loading" ? <Loading /> : null}
      <Navbar name={data.name} user_photo={data.user_photo} />
      <section
        className={`flex flex-col bg-primary w-full overflow-auto p-4 ${className}`}
      >
        {children}
      </section>
    </main>
  );
}
