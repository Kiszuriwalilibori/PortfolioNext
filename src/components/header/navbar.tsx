import { useId } from "react";

import Link from "./link";

import { useMenuVisibilityContext } from "../../../contexts/MenuVisibilityProvider";

const links = ["aboutme", "skills", "projects", "contact"];

export default function Navbar() {
    const { isMenuVisible } = useMenuVisibilityContext();
    const ID = useId();

    return (
        <nav
            className={isMenuVisible ? "navbar navbar--active fade-in" : "navbar"}
            itemScope
            itemType="http://schema.org/LocalBusiness"
        >
            <ul className="navbar__list">
                {links.map(link => (
                    <Link key={`${ID}-${link}`} item={link} />
                ))}
            </ul>
        </nav>
    );
}
