import { useMenuVisibilityContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";

interface Props {
    page: string;
}
function CustomLink(props: Props) {
    const { page } = props;
    const { toggleMenuVisibility } = useMenuVisibilityContext();

    return (
        <li className="navbar__item" onClick={toggleMenuVisibility}>
            <Link href={`/${page}`} rel="noopener" className="btn btn-normal" aria-label={page} tabIndex={0}>
                <Image src={`/icons/${page}.svg`} alt={`${page} link`} width={40} height={40} />
                <span>{page}</span>
            </Link>
        </li>
    );
}

export default CustomLink;
