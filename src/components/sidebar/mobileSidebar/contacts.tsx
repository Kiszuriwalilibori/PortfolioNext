import { useId } from "react";

import { Contact } from "types";
import { CONTACTS } from "../../../../data/contacts";

import { Icons, IconLabels } from "../../common/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
