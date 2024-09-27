import { LoaderFunctionArgs } from "@remix-run/node";
import { ensureAuthenticated } from "~/utils/session.server";

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const auth = await ensureAuthenticated(request);
//   const user = await getUser(request);
//   const userData: UserData = await GetData(user.uid);
//   return { auth, userData };
// };

// Loader que vou utilizar como padrao nas paginas
export const simpleLoader = async ({ request }: LoaderFunctionArgs) => {
  const auth = await ensureAuthenticated(request);
  // const user = await getUser(request);
  // const userData: UserData = await GetData(user.uid);
  // console.log(userData);
  // return { auth, userData };
  return auth;
};
