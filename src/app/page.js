"use client";
import { searchbar } from "@/components/searchBar";
import { VariationDiv } from "@/components/variation/variationDiv";

export default function Home() {
  return (
    <div className="flex bg-secondary">
      <div className="w-96">
        <p>teste</p>
      </div>
      <div className="bg-primary h-screen w-full">
        {searchbar()}
        <div>{VariationDiv()}</div>
      </div>
    </div>
  );
}
