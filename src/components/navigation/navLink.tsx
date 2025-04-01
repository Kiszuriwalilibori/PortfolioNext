import { Pages, pageToHref, pageToIconSrc, pageToImgAlt } from "@/models/pages";

import Image from "next/image";
import Link from "next/link";

interface Props {
    page: Pages;
    clickHandler: () => void;
    currentPathName: string;
}
function NavLink(props: Props) {
    const { page, clickHandler, currentPathName } = props;
    const isActive = currentPathName === pageToHref(page) || currentPathName.startsWith(pageToHref(page));
    const linkClassName = isActive ? "btn btn-normal btn-active" : "btn btn-normal";

    return (
        <li className="navbar__item" onClick={clickHandler}>
            <Link href={pageToHref(page)} rel="noopener" className={linkClassName} aria-label={page} tabIndex={0}>
                <Image src={pageToIconSrc(page)} alt={pageToImgAlt(page)} width={40} height={40} />
                <span>{page}</span>
            </Link>
        </li>
    );
}

export default NavLink;
