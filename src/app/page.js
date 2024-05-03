import { searchbar } from "../components/searchBar";

export default function Home() {
  return (
    <div className="bg-primary h-screen">
      {searchbar()}
      <div></div>
    </div>
  );
}
