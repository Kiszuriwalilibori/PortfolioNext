import { useId } from "react";

import { Icons, IconLabels } from "@icons";

import { CONTACTS } from "@/data/sidebar_contacts";
import { ContactType } from "@/types";
import Link from "@mui/material/Link";
import { contactItemSx, contactLinkSx, contactsSx } from "./MobileSidebar.styles";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

export const Contacts = () => {
    const ID = useId();
    return (
        <List sx={contactsSx}>
            {CONTACTS.map((contact: ContactType) => (
                <ListItem key={`${ID}-${contact.ID}`} sx={contactItemSx}>
                    <Link href={contact.link} aria-label={IconLabels[contact.ID]} sx={contactLinkSx}>
                        {Icons[contact.ID]}
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};

export default Contacts;
