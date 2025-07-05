"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, GA_TRACKING_ID } from "@/lib/gtag";

export function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (GA_TRACKING_ID) {
            pageview(pathname + searchParams.toString());
        }
    }, [pathname, searchParams]);

    return null;
}

export default GoogleAnalytics;
