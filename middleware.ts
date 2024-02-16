import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/hr", request.url));
  }

  if (
    pathname === "/admin" ||
    pathname === "/hr/admin" ||
    pathname === "/en/admin"
  ) {
    return NextResponse.redirect(
      new URL(
        "https://app.contentful.com/spaces/woj3j3wz3tf0/views/entries?searchText=&contentTypeId=&contentTypeIds=project&displayedFieldIds=contentType&displayedFieldIds=updatedAt&displayedFieldIds=author&order.direction=descending&order.fieldId=updatedAt&filters="
      )
    );
  }

  if (
    pathname !== "/en" &&
    pathname !== "/hr" &&
    pathname !== "/admin" &&
    pathname.split("/").length === 2
  ) {
    return NextResponse.redirect(new URL("/hr", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
