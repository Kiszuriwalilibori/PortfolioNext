"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, GA_TRACKING_ID } from "@/lib/gtag";

function GoogleAnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (GA_TRACKING_ID) {
            const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
            pageview(url);
        }
    }, [pathname, searchParams]);

    return null;
}

export function GoogleAnalytics() {
    return (
        <Suspense fallback={null}>
            <GoogleAnalyticsTracker />
        </Suspense>
    );
}

export default GoogleAnalytics;
