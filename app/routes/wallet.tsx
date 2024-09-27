import { MetaFunction, Outlet } from "@remix-run/react";
import { Layout } from "~/components";
import { simpleLoader } from "~/loader/simpleLoader";

export const meta: MetaFunction = () => {
  return [{ title: "Carteiras" }];
};

export const loader = simpleLoader;

export default function Wallet() {
  return (
    <Layout className="gap-y-5">
      <Outlet />
    </Layout>
  );
}
