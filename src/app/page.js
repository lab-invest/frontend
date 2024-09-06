"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function submiLogin() {
    setCookie("user", "Logged");
    router.push("/home");
  }

  return (
    <main className="flex flex-col justify-center items-center bg-primary h-screen">
      <h1 className="font-bold text-white pb-20">LOGIN ROUTE</h1>
      <button
        onClick={submiLogin}
        className="p-3 bg-gray-500 border rounded text-white"
      >
        LOGIN
      </button>
    </main>
  );
}
