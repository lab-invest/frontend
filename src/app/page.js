"use client";
import { actionbar } from "@/components/actionBar";
import { VariationDiv } from "@/components/variation/variationDiv";
import { navbar } from "../components/navbar";
import { searchbar } from "../components/searchBar";

export default function Home() {
  return (
    <div className="flex bg-secondary">
      <div className="w-96">{navbar()}</div>
      <div className="bg-primary h-screen w-full">
        {searchbar()}
        <div>
          {VariationDiv()}
          {actionbar("PETR4 ")}
        </div>
      </div>
    </div>
  );
}
