import { NextResponse } from "next/server";

export function middleware(req) {
    const { pathname } = req.nextUrl;
    const adminToken = req.cookies.get("admin_token");

    if (pathname.startsWith("/kits") && pathname !== "/kits/login" && !adminToken) {
        return NextResponse.redirect(new URL("/kits/login", req.url)); // Redirect to login if no token
    }
    if (adminToken && pathname.split('/')?.includes('login')) {
        return NextResponse.redirect(new URL("/kits/dashboard", req.url)); // Redirect to login if no token
    }
        return NextResponse.next(); // Allow the request to proceed if authenticated
}

export const config = {
    matcher: [
        "/api/booking/:path*",
        "/api/contact/:path*",
        "/api/enums/:path*",
        "/kits/:path*", // Apply middleware to kits routes
    ],
};
