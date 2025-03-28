"use client";

import Fade from "@mui/material/Fade";
import { useId } from "react";

import NavLink from "./navLink";
import { PAGES as LINKS } from "@/types";
import NavigationToggler from "./navigationToggler";
import { useMenuVisibilityContext } from "@/contexts";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const { isMenuVisible, toggleMenuVisibility } = useMenuVisibilityContext();
    const pathname = usePathname();

    const ID = useId();

    return (
        <section aria-label="navigation container">
            <NavigationToggler />
            <Fade in={isMenuVisible}>
                <nav aria-label="site navigation" className={"navbar navbar--active"} itemScope itemType="http://schema.org/LocalBusiness">
                    <ul className="navbar__list">
                        {LINKS.map(link => (
                            <NavLink key={`${ID}-${link}`} page={link} clickHandler={toggleMenuVisibility} currentPathName={pathname} />
                        ))}
                    </ul>
                </nav>
            </Fade>
        </section>
    );
}
