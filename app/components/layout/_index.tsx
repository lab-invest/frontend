import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <main className="flex h-screen w-screen">
      <Navbar />
      <section
        className={`flex flex-col bg-primary w-full overflow-auto p-4 ${className}`}
      >
        {children}
      </section>
    </main>
  );
}
