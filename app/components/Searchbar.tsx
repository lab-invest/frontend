import { useFetcher } from "@remix-run/react";
import SvgSearch from "~/icons/searchIcon";

interface SearchbarProps {
  onSearchChange?: (value: string) => void;
}

export default function Searchbar({ onSearchChange }: SearchbarProps) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      action="/actions/search"
      method="get"
      className="flex justify-end items-center rounded-lg h-8 text-white bg-third"
    >
      <input
        type="text"
        name="q"
        placeholder="Pesquisar ações"
        className="w-full text-sm bg-transparent h-full rounded-lg bg-gray-100 pl-1.5 focus:outline-none focus:ring-1 focus:ring-purple-600"
        onChange={(e) => onSearchChange && onSearchChange(e.target.value)} // Chamar a função se estiver definida
      />
      <button type="submit" className="absolute pr-4">
        <SvgSearch />
      </button>
    </fetcher.Form>
  );
}