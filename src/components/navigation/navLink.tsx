import Image from "next/image";
import Link from "next/link";

interface Props {
    page: string;
    clickHandler: () => void;
    currentPathName: string;
}
function NavLink(props: Props) {
    const { page, clickHandler, currentPathName } = props;
    const isActive = currentPathName === `/${page}` || currentPathName.startsWith(`/${page}`);
    const linkClassName = isActive ? "btn btn-normal btn-active" : "btn btn-normal";

    return (
        <li className="navbar__item" onClick={clickHandler}>
            <Link href={`/${page}`} rel="noopener" className={linkClassName} aria-label={page} tabIndex={0}>
                <Image src={`/icons/${page}.svg`} alt={`${page} link`} width={40} height={40} />
                <span>{page}</span>
            </Link>
        </li>
    );
}

export default NavLink;
