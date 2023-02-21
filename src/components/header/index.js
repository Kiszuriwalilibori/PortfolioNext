import { useRouter } from "next/router";
import MenuToggler from "./menuToggler";
import Navbar from "./navbar";
import { useState, useCallback } from "react";

import { useBreakpoints } from "../../../contexts/ViewPortProvider";
import Sidebar from "./sidebar";
import MobileHeader from "../headerMobile";

//const small = new Set()<string>["mobile", "phablet"];
const small = new Set(["mobile", "phablet"]);

export const Header = () => {
    const { route } = useRouter();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const { desktopSize } = useBreakpoints();
    const toggleMenu = useCallback(() => {
        setIsMenuVisible(!isMenuVisible);
    }, [isMenuVisible]);
    if (route === "/") return null;
    return (
        <>
            <header className="header">
                {!small.has(desktopSize) && <Sidebar />}
                {small.has(desktopSize) && <MobileHeader route={route.slice(1)} />}
                <Navbar isVisible={isMenuVisible} clickHandler={toggleMenu} />
                <MenuToggler clickHandler={toggleMenu} />
            </header>
        </>
    );
};

export default Header;
