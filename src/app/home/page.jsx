import { Navbar } from "@/components/Partials/Navbar/Navbar";
import { VariationDiv } from "@/components/UI/variation/variationDiv";
import { walletValue } from "@/components/Partials/walletValue";
import { searchbar } from "@/components/Partials/searchBar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-80">
        <Navbar />
      </div>
      <div className="bg-primary w-full">
        {searchbar()}
        <VariationDiv />
        {walletValue()}
      </div>
    </div>
  );
}
