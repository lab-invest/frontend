import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const user = req.cookies.get("user")?.value;
  const isLoginPage = req.nextUrl.pathname === "/";

  if (!user) {
    if (isLoginPage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isLoginPage) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/home/:path*",
    "/settings/:path*",
    "/actions/:path*",
    "/help/:path*",
    "/wallets/:path*",
  ],
};
