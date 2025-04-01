import { useId } from "react";

import { Icons, IconLabels } from "@/components/common/icons";

import { CONTACTS } from "@/data/contacts";
import { Contact } from "@/types";

export const Contacts = () => {
    const ID = useId();
    return (
        <div className="header-mobile__contacts">
            {CONTACTS.map((contact: Contact) => (
                <a key={`${ID}-${contact.ID}`} href={contact.link} aria-label={IconLabels[contact.ID]}>
                    {Icons[contact.ID]}
                </a>
            ))}
        </div>
    );
};

export default Contacts;
