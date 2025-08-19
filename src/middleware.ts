import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { is } from "zod/v4/locales";

export default auth((req) => {
  const isLogin=!!req.auth
  console.log("Route===>", req.nextUrl.pathname);
  console.log('isLogin===>',isLogin);
  // req.auth
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
