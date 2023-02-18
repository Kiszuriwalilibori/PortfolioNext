import { useRouter } from "next/router";
import MenuToggler from "./menuToggler";
import Navbar from "./navbar";
import { useState, useCallback } from "react";
export const Header = () => {
    const router = useRouter();
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuVisible(!isMenuVisible);
    }, [isMenuVisible]);

    return (
        <header className="header">
            <Navbar isVisible={isMenuVisible} clickHandler={toggleMenu} />
            <MenuToggler clickHandler={toggleMenu} />
        </header>
    );
};

export default Header;
