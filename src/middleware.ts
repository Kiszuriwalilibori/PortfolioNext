import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Current path (used by application)
    response.headers.set("x-current-path", request.nextUrl.pathname);

    // Security headers
    response.headers.set("X-Content-Type-Options", "nosniff");

    response.headers.set("X-Frame-Options", "DENY");

    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

    response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    response.headers.set(
        "Content-Security-Policy",
        [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://apis.google.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob: https: http://www.gravatar.com",
            "font-src 'self' data: https:",
            "connect-src 'self' https:",
            "frame-ancestors 'none'",
            "frame-src 'self' https://portfolio-413710.firebaseapp.com",
            "base-uri 'self'",
            "form-action 'self'",
            "object-src 'none'",
        ].join("; ")
    );

    return response;
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
