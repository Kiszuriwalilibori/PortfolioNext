import Image from "next/image";
import { memo, useId } from "react";
import { Contact } from "../../../types";
import ContactItem from "./contact";
import { contacts } from "../../../data/contacts";

interface Props {
    route: string;
}

function HeaderMobile(props: Props) {
    const { route } = props;
    const postfix = route ? route : "aboutme";
    const className = `header-mobile header-mobile--${postfix}`;
    const ID = useId();
    return (
        <article className={className}>
            <Image width={100} height={100} className="image" src="/images/author.jpg" alt="author foto" />
            <h1 className="name">Piotr Maksymiuk</h1>
            <h2 className="description">Front-End Developer</h2>
            <ul className="header-mobile__contacts">
                {contacts.map((item: Contact) => (
                    <ContactItem key={`${ID}-${item.ID}`} data={item} />
                ))}
            </ul>
        </article>
    );
}

export default memo(HeaderMobile);
