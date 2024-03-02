import { NextResponse } from "next/server";

export const middleware = async (request) => {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
};
