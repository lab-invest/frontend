import { Outlet } from "@remix-run/react";
import { Layout } from "~/components";

export default function action() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
