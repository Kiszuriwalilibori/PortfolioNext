import { useRouter } from "next/router";

import MenuToggler from "./menuToggler";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import MobileHeader from "../headerMobile";

import { useBreakpoints } from "../../../contexts/ViewPortProvider";

//const small = new Set()<string>["mobile", "phablet"];
const small = new Set(["mobile", "phablet"]);

export const Header = () => {
    const { route } = useRouter();
    const { desktopSize } = useBreakpoints();
    if (route === "/") return null;
    return (
        <>
            <header className="header">
                {!small.has(desktopSize) && <Sidebar />}
                {small.has(desktopSize) && <MobileHeader route={route.slice(1)} />}
                <Navbar />
                <MenuToggler />
            </header>
        </>
    );
};

export default Header;
