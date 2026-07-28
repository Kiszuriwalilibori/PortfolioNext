import { Ref } from "react";

import IconButton from "@mui/material/IconButton";

import Image from "next/image";

import { useMenuVisibilityContext } from "@/contexts";
import { touchableSx } from "@/styles/common";

import { navigationTogglerSx } from "./navigation.styles";

interface Props {
    ref?: Ref<HTMLButtonElement>;
}

export const NavigationToggler = ({ ref }: Props) => {
    const { toggleMenuVisibility, isMenuVisible } = useMenuVisibilityContext();

    return (
        <IconButton ref={ref} onClick={toggleMenuVisibility} aria-label={isMenuVisible ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuVisible} aria-controls="mobile-navigation" disableRipple disableFocusRipple size="large" sx={{ ...navigationTogglerSx, ...touchableSx }}>
            <Image src="/icons/hamburger.svg" alt="" aria-hidden="true" width={30} height={30} />
        </IconButton>
    );
};

export default NavigationToggler;
