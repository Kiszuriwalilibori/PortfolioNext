import { useId } from "react";

import Link from "./link";

import { useMenuVisibilityContext } from "../../../contexts/MenuVisibilityProvider";
import Fade from "@mui/material/Fade";
import NavigationToggler from "./navigationToggler";

const links = ["aboutme", "skills", "projects", "career", "contact"];

export default function Navigation() {
    const { isMenuVisible } = useMenuVisibilityContext();
    const ID = useId();

    return (
        <nav aria-label="navigation container">
            <NavigationToggler />
            <Fade in={isMenuVisible}>
                <nav
                    aria-label="site navigation"
                    className={"navbar navbar--active"}
                    itemScope
                    itemType="http://schema.org/LocalBusiness"
                >
                    <ul className="navbar__list">
                        {links.map(link => (
                            <Link key={`${ID}-${link}`} page={link} />
                        ))}
                    </ul>
                </nav>
            </Fade>
        </nav>
    );
}
