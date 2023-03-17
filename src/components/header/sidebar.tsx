import Image from "next/image";
import ContactItem from "./contact";
import { memo, useId } from "react";
import { Contact } from "../../../types";
import { contacts } from "../../../data/contacts";

const Sidebar = () => {
    const ID = useId();
    return (
        <article className="sidebar">
            <article className="author">
                <Image className="image" src="/images/author.jpg" alt="author foto" width={500} height={500} />
                <h1 className="name">Piotr Maksymiuk</h1>
                <h2 className="description">Front-End Developer</h2>
                <ul className="sidebar__contacts">
                    {contacts.map((item: Contact) => (
                        <ContactItem key={`${ID}-${item.ID}`} data={item} />
                    ))}
                </ul>
            </article>
        </article>
    );
};

export default memo(Sidebar);
