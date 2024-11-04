import { MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { Layout } from "~/components";
import { simpleLoader } from "~/loader/simpleLoader";
import { UserData } from "~/types/userData";

export const meta: MetaFunction = () => {
  return [{ title: "Carteiras" }];
};

export const loader = simpleLoader;

export default function Wallet() {
  const loaderData = useLoaderData<{ userData: UserData }>();
  const userData = loaderData.userData;

  return (
    <Layout userData={userData} className="gap-y-5">
      <Outlet />
    </Layout>
  );
}
