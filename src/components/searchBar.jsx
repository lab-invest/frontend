import { Input } from "../components/ui/input";
import { searchicon } from "../icons/seachIcon";

export function searchbar() {
  return (
    <div className="pl-10 pr-10 pt-4">
      <div className="flex items-center rounded-lg h-12">
        <Input
          className="text-white bg-third border-none focus:ring-purple-800 focus:ring-purple-800-500"
          placeholder="Procure por ações |"
          type="text"
        />
        <div className="mr-14 right-0 absolute">{searchicon()}</div>
      </div>
    </div>
  );
}
