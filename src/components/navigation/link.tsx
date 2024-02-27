import Image from "next/image";
import Link from "next/link";

import { useMenuVisibilityContext } from "contexts";
interface Props {
    page: string;
}
function CustomLink(props: Props) {
    const { page } = props;
    const { toggleMenuVisibility } = useMenuVisibilityContext();
    const link = page === "aboutme" ? "/" : `/${page}`;
    return (
        <li className="navbar__item" onClick={toggleMenuVisibility}>
            <Link href={link} rel="noopener" className="btn btn-normal" aria-label={page} tabIndex={0}>
                <Image src={`/icons/${page}.svg`} alt={`${page} link`} width={40} height={40} />
                <span>{page}</span>
            </Link>
        </li>
    );
}

export default CustomLink;
