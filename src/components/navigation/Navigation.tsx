"use client";
import { useEffect, useId, useRef } from "react";

import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";

import { usePathname } from "next/navigation";

import { useMenuVisibilityContext } from "@/contexts";
import { PAGES, PageUtils } from "@/models/pages";

import NavigationLink from "./NavigationLink";
import { NavigationToggler } from "./NavigationSwitch";
import { navigationListSx, navigationSx } from "./navigation.styles";

export default function Navigation() {
    const { isMenuVisible, hideMenu } = useMenuVisibilityContext();
    const pathname = usePathname();

    const ID = useId();
    const navigationRef = useRef<HTMLUListElement>(null);
    const togglerRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (!isMenuVisible) return;

        requestAnimationFrame(() => {
            const firstLink = navigationRef.current?.querySelector<HTMLAnchorElement>("a");
            firstLink?.focus();
        });
    }, [isMenuVisible]);

    // const closeMenu = () => {
    //     hideMenu();
    //     togglerRef.current?.focus();
    // };

    const closeMenu = (returnFocus = false) => {
        hideMenu();

        if (returnFocus) {
            togglerRef.current?.focus();
        }
    };
    useEffect(() => {
        if (!isMenuVisible) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu(true);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isMenuVisible]);

    return (
        <ClickAwayListener onClickAway={() => closeMenu()}>
            <Box>
                <NavigationToggler ref={togglerRef} />
                <Fade in={isMenuVisible} unmountOnExit>
                    <Box component="nav" id="mobile-navigation" aria-label="Main navigation" sx={navigationSx} itemScope itemType="http://schema.org/LocalBusiness">
                        <Box component="ul" sx={navigationListSx} ref={navigationRef}>
                            {PAGES.map(page => (
                                <NavigationLink key={PageUtils.pageToKey(ID, page)} page={page} clickHandler={closeMenu} currentPathName={pathname} />
                            ))}
                        </Box>
                    </Box>
                </Fade>
            </Box>
        </ClickAwayListener>
    );
}
