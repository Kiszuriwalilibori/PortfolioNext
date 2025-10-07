import { DesktopSidebarWrapper } from "@/components";
import DesktopSidebar from "@/components/sidebar/desktopSidebar";
import MobileSidebar from "@/components/sidebar/mobileSidebar";
import { ViewportProvider } from "@/contexts";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewportProvider>
            <DesktopSidebarWrapper mobileSidebar={<MobileSidebar />} desktopSidebar={<DesktopSidebar />} />
            <main id="main-content" tabIndex={-1}>{children}</main>
        </ViewportProvider>
    );
}
