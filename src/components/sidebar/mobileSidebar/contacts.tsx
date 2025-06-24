import { useId } from "react";

import { Icons, IconLabels } from "@icons";

import { CONTACTS } from "@/data/sidebar_contacts";
import { ContactType } from "@/types";

export const Contacts = () => {
    const ID = useId();
    return (
        <div className="header-mobile__contacts">
            {CONTACTS.map((contact: ContactType) => (
                <a key={`${ID}-${contact.ID}`} href={contact.link} aria-label={IconLabels[contact.ID]}>
                    {Icons[contact.ID]}
                </a>
            ))}
        </div>
    );
};

export default Contacts;
