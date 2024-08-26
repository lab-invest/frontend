import SvgSearch from "~/icons/searchIcon";

export default function Searchbar() {
  return (
    <div className="flex justify-end items-center rounded-lg h-8 text-white bg-third">
      <input
        className="w-full text-sm bg-transparent h-full rounded-lg bg-gray-100 pl-1.5 focus:outline-none focus:ring-1 focus:ring-purple-600"
        placeholder="Pesquisar"
      ></input>
      <div className="absolute pr-4 ">{<SvgSearch />}</div>
    </div>
  );
}
