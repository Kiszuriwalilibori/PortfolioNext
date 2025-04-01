"use client";

// import { usePathname } from "next/navigation";

// import DesktopSidebar from "./desktopSidebar";
// import MobileSidebar from "./mobileSidebar";

import { useBreakpoints } from "@/contexts";
import { mobileViewports } from "@/models/viewports";
// import { WrappedDesktopSidebar } from "./desktopSidebar/WrappedDesktopSidebar";

export const DesktopSidebarWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    // const pathname = usePathname();
    const { viewportSize } = useBreakpoints();

    return (
        <>
            {!mobileViewports.has(viewportSize) && children}
            {/* {children} */}
            {/* {mobileViewports.has(viewportSize) ? <MobileSidebar route={pathname.slice(1)} /> : <WrappedDesktopSidebar />} */}
        </>
    );
};

export default DesktopSidebarWrapper;
