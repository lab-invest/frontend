import { json, useLoaderData } from "@remix-run/react";

export function useGetData() {
  const data = useLoaderData();
  return json(data);
}
