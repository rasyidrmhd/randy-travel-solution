import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const access_token = request.cookies.get("access_token");
  const isVerified = access_token?.value;

  if (!isVerified) {
    if (request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.next();
    }

    // guard if not logged in yet and go to dashboard or enne test,
    // will redirected to login page
    if (
      !request.nextUrl.pathname.startsWith("/auth") ||
      request.nextUrl.pathname === "/auth"
    ) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  if (isVerified) {
    // guard if already logged in and go to auth page,
    // will redirected to dashboard
    if (request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL(`/`, request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/", "/auth/:path*"],
};
