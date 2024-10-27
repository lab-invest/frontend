import { createCookieSessionStorage, redirect } from "@remix-run/node";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "~/config";

import type { User } from "~/types/user";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    httpOnly: true,
    name: "__session",
    path: "/",
    sameSite: "lax",
    secrets: ["ImSoS3cr3t"],
    secure: process.env.NODE_ENV === "production",
  },
});

export async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    return error;
  }
}

export async function getSession(request: Request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

export async function logout(request: Request) {
  const session = await getSession(request);
  throw redirect("/login", {
    headers: { "Set-Cookie": await sessionStorage.destroySession(session) },
  });
}

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function createUserSession(
  request: Request,
  email: string,
  password: string
) {
  const session = await getSession(request);
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  session.set("currentUser", {
    email,
    uid: userCredential.user.uid,
  });

  const cookie = await sessionStorage.commitSession(session, {
    maxAge: ONE_WEEK,
  });

  const successRedirect = "/home";
  return redirect(successRedirect, {
    headers: {
      "Set-Cookie": cookie,
    },
  });
}

export async function getUser(request: Request) {
  const session = await getSession(request);
  const currentUser = session.get("currentUser") as User;
  return currentUser;
}

export async function resetPassowrd(email: string) {
  await sendPasswordResetEmail(auth, email);
  return { success: true };
}

export async function ensureAuthenticated(request: Request) {
  const user = await getUser(request);
  if (user) return user;

  const { pathname, search } = new URL(request.url);
  const session = await getSession(request);

  session.set("redirect", `${pathname}${search}`);

  throw redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}
