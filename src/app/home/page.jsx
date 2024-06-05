import { Navbar } from "@/components/Partials/Navbar/Navbar";
import { searchbar } from "@/components/Partials/searchBar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-80">
        <Navbar />
      </div>
      <div className="bg-primary w-full">
        {searchbar()}
        <p>teste</p>
      </div>
    </div>
  );
}
