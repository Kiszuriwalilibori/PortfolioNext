import Image from "next/image";
import Link from "next/link";

import BasicButton from "../common/BasicButton";

import { useMenuVisibilityContext } from "../../../contexts/MenuVisibilityProvider";
interface Props {
    item: string;
}
const MyLink = (props: Props) => {
    const { item } = props;
    const { toggleMenuVisibility } = useMenuVisibilityContext();
    const link = item === "aboutme" ? "/" : `/${item}`;
    return (
        <li className="navbar__item" onClick={toggleMenuVisibility}>
            <Link href={link}>
                <BasicButton className="btn btn-normal">
                    <Image src={`/icons/${item}.svg`} alt={`${item} link`} width={40} height={40} />
                    <span>{item}</span>
                </BasicButton>
            </Link>
        </li>
    );
};

export default MyLink;
