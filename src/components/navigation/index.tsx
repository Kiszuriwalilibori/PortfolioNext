import Fade from "@mui/material/Fade";
import { useId } from "react";

import Link from "./link";
import NavigationToggler from "./navigationToggler";

import { useMenuVisibilityContext } from "contexts";
import { LoggedUser } from "..";

const LINKS = ["aboutme", "skills", "projects", "career", "contact"];

export default function Navigation() {
    const { isMenuVisible } = useMenuVisibilityContext();
    const ID = useId();

    return (
        <nav aria-label="navigation container">
            <LoggedUser />
            <NavigationToggler />
            <Fade in={isMenuVisible}>
                <nav
                    aria-label="site navigation"
                    className={"navbar navbar--active"}
                    itemScope
                    itemType="http://schema.org/LocalBusiness"
                >
                    <ul className="navbar__list">
                        {LINKS.map(link => (
                            <Link key={`${ID}-${link}`} page={link} />
                        ))}
                    </ul>
                </nav>
            </Fade>
        </nav>
    );
}
