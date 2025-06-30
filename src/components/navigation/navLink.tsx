import { Pages, PageUtils } from "@/models/pages";

import Image from "next/image";
import Link from "next/link";

interface Props {
    page: Pages;
    clickHandler: () => void;
    currentPathName: string;
}
function NavLink(props: Props) {
    const { page, clickHandler, currentPathName } = props;
    const isActive = currentPathName === PageUtils.pageToHref(page) || currentPathName.startsWith(PageUtils.pageToHref(page));
    const linkClassName = isActive ? "btn btn-normal btn-active" : "btn btn-normal";

    return (
        <li className="navbar__item">
            <Link href={PageUtils.pageToHref(page)} rel="noopener" className={linkClassName} aria-label={`Navigate to ${page} page`} tabIndex={0} onClick={clickHandler}>
                <Image src={PageUtils.pageToIconSrc(page)} alt={PageUtils.pageToImgAlt(page)} width={40} height={40} />
                <span>{page}</span>
            </Link>
        </li>
    );
}

export default NavLink;
