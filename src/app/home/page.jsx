import { Navbar } from "@/components/Navbar";
import { searchbar } from "@/components/searchBar";
import { VariationDiv } from "@/components/variation/variationDiv";
import { walletValue } from "@/components/walletValue";

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
