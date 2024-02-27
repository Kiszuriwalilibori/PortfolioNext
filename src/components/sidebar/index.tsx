import { useRouter } from "next/router";

import LargeSidebar from "./largeSidebar";
import MobileSidebar from "./mobileSidebar";

import { useBreakpoints } from "contexts";

const small = new Set(["mobile", "phablet"]);

export const Sidebar = () => {
    const { route } = useRouter();
    const { desktopSize } = useBreakpoints();
    return (
        <>
            {!small.has(desktopSize) && <LargeSidebar />}
            {small.has(desktopSize) && <MobileSidebar route={route.slice(1)} />}
        </>
    );
};

export default Sidebar;
