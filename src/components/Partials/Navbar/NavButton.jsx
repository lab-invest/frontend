"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton(href, text) {
  const pathname = usePathname();
  let color = "bg-gray";

  if (pathname === href) {
    color = "bg-dark_green";
  }

  return (
    <Link href={href}>
      <div className="flex items-center mt-7">
        <div className={`w-1 h-1 mr-10 ${color}`}></div>
        <p className="text-gray text-lg">{text}</p>
      </div>
    </Link>
  );
}
