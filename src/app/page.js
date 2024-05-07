import { searchbar } from "../components/searchBar";
import { variation } from "../components/variation";
import { navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="flex bg-secondary">
      <div className="w-96">
        {navbar()}
      </div>
      <div className="bg-primary h-screen w-full">
        {searchbar()}
        <div className="flex ml-10 mr-10 justify-between">
          {variation("PETR4", 320)}
          {variation("PETR4", -30)}
          {variation("PETR4", 32)}
          {variation("PETR4", 2)}
          {variation("PETR4", -32)}
          {variation("PETR4", 14)}
          {variation("PETR4", -10)}
          {variation("PETR4", -4)}
        </div>
      </div>
    </div>
  );
}
