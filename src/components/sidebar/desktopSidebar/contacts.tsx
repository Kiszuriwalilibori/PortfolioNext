import { useId } from "react";

import { ContactType } from "@/types";
import { CONTACTS } from "@/data/sidebar_contacts";
import { Icons, IconLabels } from "@icons";

export const Contacts = () => {
    const ID = useId();
    return (
        <ul className="sidebar__contacts">
            {CONTACTS.map((contact: ContactType) => (
                <li key={`${ID}-${contact.ID}`}>
                    <a href={contact.link} aria-label={IconLabels[contact.ID]} target={contact.link.startsWith("http") ? "_blank" : undefined} rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {Icons[contact.ID]}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Contacts;
