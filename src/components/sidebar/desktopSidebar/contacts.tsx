import { useId } from "react";

import { ContactType } from "@/types";
import { CONTACTS } from "@/data/sidebar_contacts";
import { Icons, IconLabels } from "@icons";

export const Contacts = () => {
    const ID = useId();
    return (
        <div className="sidebar__contacts">
            {CONTACTS.map((contact: ContactType) => (
                <a key={`${ID}-${contact.ID}`} href={contact.link} aria-label={IconLabels[contact.ID]} role="listitem"target={contact.link.startsWith('http') ? '_blank' : undefined}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {Icons[contact.ID]}
                </a>
            ))}
        </div>
    );
};

export default Contacts;
