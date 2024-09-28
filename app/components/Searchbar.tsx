import { useFetcher } from "@remix-run/react";
import SvgSearch from "~/icons/searchIcon";

export default function Searchbar() {
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
      />
      <button type="submit" className="absolute pr-4">
        <SvgSearch />
      </button>
    </fetcher.Form>
  );
}
