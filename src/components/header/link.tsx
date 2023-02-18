import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface Props {
    item: string;
    clickHandler: MouseEventHandler<HTMLButtonElement>;
}
const MyLink = (props: Props) => {
    const { item, clickHandler } = props;
    return (
        <li className="navbar__item" onClick={clickHandler as unknown as MouseEventHandler<HTMLLIElement>}>
            <Link className="navbar__anchor" href={`/${item}`}>
                <Image src={`/icons/${item}.svg`} alt={`${item} link`} width={40} height={40} />
                <span className="navbar__text">{item}</span>
            </Link>
        </li>
    );
};

export default MyLink;
