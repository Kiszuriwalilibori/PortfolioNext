import { useRouter } from "next/router";

import MenuToggler from "./menuToggler";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import MobileHeader from "../mobileHeader";
import { DesktopSizes } from "../../../types";

import { useBreakpoints } from "../../../contexts/ViewPortProvider";

const small = new Set(["mobile", "phablet"]);

export const Header = () => {
    const { route } = useRouter();
    const { desktopSize } = useBreakpoints();
    return (
        <>
            <header className="header">
                {!small.has(desktopSize as DesktopSizes) && <Sidebar />}
                {small.has(desktopSize as DesktopSizes) && <MobileHeader route={route.slice(1)} />}
                <Navbar />
                <MenuToggler />
            </header>
        </>
    );
};

export default Header;
