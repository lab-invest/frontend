import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { Navbar } from "~/components";
import { ensureAuthenticated } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return [{ title: "Carteiras" }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await ensureAuthenticated(request);
};

export default function Config() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col bg-primary w-full px-10 gap-4 pt-6"></div>
    </div>
  );
}
