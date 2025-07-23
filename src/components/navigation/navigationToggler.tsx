import ClickAwayListener from "@mui/material/ClickAwayListener";
import Image from "next/image";
import { MyButton } from "..";
import { useMenuVisibilityContext } from "@/contexts";

const NavigationToggler = () => {
    const { toggleMenuVisibility, hideMenu, isMenuVisible } = useMenuVisibilityContext();

    return (
        <ClickAwayListener onClickAway={hideMenu}>
            <MyButton aria-label={isMenuVisible ? "Close navigation menu" : "Open navigation menu"} className="btn btn-normal btn-hamburger" onClick={toggleMenuVisibility} role="button" aria-pressed={isMenuVisible}>
                <Image src={`/icons/hamburger.svg`} alt={isMenuVisible ? "Close navigation menu" : "Open navigation menu"} width={30} height={30} />
            </MyButton>
        </ClickAwayListener>
    );
};
export default NavigationToggler;
