import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";
import BasicButton from "../common/BasicButton";

interface Props {
    item: string;
    clickHandler: MouseEventHandler<HTMLButtonElement>;
}
const MyLink = (props: Props) => {
    const { item, clickHandler } = props;
    return (
        <li className="navbar__item" onClick={clickHandler as unknown as MouseEventHandler<HTMLLIElement>}>
            <Link href={`/${item}`}>
                <BasicButton className="btn btn-normal">
                    <Image src={`/icons/${item}.svg`} alt={`${item} link`} width={40} height={40} />
                    <span>{item}</span>
                </BasicButton>
            </Link>
        </li>
    );
};

export default MyLink;
