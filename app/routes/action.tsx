import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import {
  BoxVariation,
  InfoActionPoints,
  Navbar,
  Searchbar,
  SpecActions,
} from "~/components";
import { ensureAuthenticated } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return [{ title: "Ações" }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await ensureAuthenticated(request);
};

export default function Action() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col bg-primary w-full px-10 gap-4 pt-6">
        <Searchbar />
        <BoxVariation />
        <div className="pt-4">
          <InfoActionPoints textPts="P3TR4" />
        </div>
        <div className="flex justify-between">
          <SpecActions actionName="P3TR4" valueAction={29} />
          <SpecActions actionName="P3TR4" valueAction={29} />
          <SpecActions actionName="P3TR4" valueAction={29} />
        </div>
      </div>
    </div>
  );
}
