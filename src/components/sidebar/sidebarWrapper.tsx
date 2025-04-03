"use client";

import { useBreakpoints } from "@/contexts";
import { mobileViewports } from "@/models/viewports";

export const SidebarWrapper = ({
    mobileSidebar,
    desktopSidebar,
}: Readonly<{
    mobileSidebar: React.ReactNode;
    desktopSidebar: React.ReactNode;
}>) => {
    const { viewportSize } = useBreakpoints();

    return mobileViewports.has(viewportSize) ? mobileSidebar : desktopSidebar;
};

export default SidebarWrapper;
