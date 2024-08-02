import { Navbar } from "@/components/Partials/Navbar/Navbar";
import { VariationDiv } from "@/components/UI/variation/variationDiv";
import { walletValue } from "@/components/Partials/walletValue";
import { welcomeName } from "@/components/Partials/welcomeName";
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
        <div className="flex justify-between px-4">
          <div>{welcomeName()}</div>
          <div>{walletValue()}</div>
        </div>
      </div>
    </div>
  );
}
