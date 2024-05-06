import { searchbar } from "../components/searchBar";
import { navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="bg-primary h-screen">
      {navbar()}
      <div></div>
    </div>
  );
}
