"use client";

import Fade from "@mui/material/Fade";

import { useId } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./navLink";
import NavigationToggler from "./navigationToggler";

import { PAGES, PageUtils } from "@/models/pages";
import { useMenuVisibilityContext } from "@/contexts";

export default function Navigation() {
    const { isMenuVisible, toggleMenuVisibility } = useMenuVisibilityContext();
    const pathname = usePathname();

    const ID = useId();

    return (
        <>
            <NavigationToggler />
            <Fade in={isMenuVisible}>
                <nav aria-label="site navigation" className={"navbar navbar--active"} itemScope itemType="http://schema.org/LocalBusiness">
                    <ul className="navbar__list">
                        {PAGES.map(page => (
                            <NavLink key={PageUtils.pageToKey(ID, page)} page={page} clickHandler={toggleMenuVisibility} currentPathName={pathname} />
                        ))}
                    </ul>
                </nav>
            </Fade>
        </>
    );
}
