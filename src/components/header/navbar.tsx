import Link from "./link";
import { MouseEventHandler, useId } from "react";
import MenuToggler from "./menuToggler";

const links = ["aboutme", "skills", "projects", "contact"];

interface Props {
    isVisible: boolean;
    clickHandler: MouseEventHandler<HTMLButtonElement>;
}
export default function Navbar(props: Props) {
    const { isVisible, clickHandler } = props;
    const ID = useId();
    return (
        <nav
            className={isVisible ? "navbar navbar--active fade-in" : "navbar"}
            itemScope
            itemType="http://schema.org/LocalBusiness"
        >
            <ul className="navbar__list">
                {links.map(link => (
                    <Link key={`${ID}-${link}`} item={link} clickHandler={clickHandler} />
                ))}
            </ul>
        </nav>
    );
}
