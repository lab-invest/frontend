import { searchbar } from "../components/searchBar";
import { variation } from "../components/variation";

export default function Home() {
  return (
    <div className="flex bg-secondary">
      <div className="w-96">
        <p>teste</p>
      </div>
      <div className="bg-primary h-screen w-full">
        {searchbar()}
        {variation("PETR4", 320)}
        {variation("PETR4", -30)}
        {variation("PETR4", 0)}
      </div>
    </div>
  );
}
