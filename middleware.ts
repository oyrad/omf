import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/hr", request.url));
  }

  if (
    pathname !== "/en" &&
    pathname !== "/hr" &&
    pathname.split("/").length === 2
  ) {
    return NextResponse.redirect(new URL("/hr", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
