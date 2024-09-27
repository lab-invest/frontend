import {
  BoxVariation,
  InfoActionPoints,
  Searchbar,
  SpecActions,
} from "~/components";

export default function SearchAction() {
  return (
    <div className="flex flex-col gap-y-5">
      <Searchbar />
      <BoxVariation />
      <InfoActionPoints textPts="P3TR4" valueAction={3.32} hasPercentual />
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 place-items-center">
        <SpecActions actionName="P3TR4" valueAction={-29} />
        <SpecActions actionName="P3TR4" valueAction={29} />
        <SpecActions actionName="P3TR4" valueAction={29} />
        <SpecActions actionName="P3TR4" valueAction={29} />
        <SpecActions actionName="P3TR4" valueAction={29} />
      </div>
    </div>
  );
}
