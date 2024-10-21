import { UserData } from "~/types/userData";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  userData: UserData;
}

export default function Layout({ children, className, userData }: LayoutProps) {
  const data = userData;

  return (
    <main className="flex h-screen w-screen">
      <Navbar name={data.name} user_photo={data.user_photo} />
      <section
        className={`flex flex-col bg-primary w-full overflow-auto p-4 ${className}`}
      >
        {children}
      </section>
    </main>
  );
}
