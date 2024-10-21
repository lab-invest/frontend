import { Outlet, useLoaderData } from "@remix-run/react";
import { Layout } from "~/components";
import { simpleLoader } from "~/loader/simpleLoader";
import { UserData } from "~/types/userData";

export const loader = simpleLoader;

export default function Action() {
  const loaderData = useLoaderData<{ userData: UserData }>();
  const userData = loaderData.userData;

  return (
    <Layout userData={userData}>
      <Outlet />
    </Layout>
  );
}
