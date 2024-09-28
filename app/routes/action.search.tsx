// arquivo: routes/actions/search.tsx
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  BoxVariation,
  InfoActionPoints,
  Searchbar,
  SpecActions,
} from "~/components";

async function fetchActions(query: string | null) {
  const actions = [
    { id: 1, name: "P3TR4", value: -29 },
    { id: 2, name: "P3TR4", value: 29 },
    { id: 3, name: "P3TR4", value: 29 },
    { id: 4, name: "P3TR4", value: 29 },
    { id: 5, name: "P3TR4", value: 29 },
  ];
  return query
    ? actions.filter((action) => action.name.includes(query))
    : actions;
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  const actions = await fetchActions(query);
  return json(actions);
};

export default function SearchAction() {
  const actions =
    useLoaderData<{ id: number; name: string; value: number }[]>();
  return (
    <div className="flex flex-col gap-y-5">
      <Searchbar />
      <BoxVariation />
      <InfoActionPoints textPts="P3TR4" valueAction={3.32} hasPercentual />
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 place-items-center">
        {actions.map((action: { id: number; name: string; value: number }) => (
          <SpecActions
            key={action.id}
            actionName={action.name}
            valueAction={action.value}
          />
        ))}
      </div>
    </div>
  );
}
