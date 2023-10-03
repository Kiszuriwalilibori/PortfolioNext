import React from "react";

import { Icons, IconLabels } from "../../common/icons";

import { Contact as SingleContact } from "../../../../types";

interface Props {
    contactData: SingleContact;
}

function SingleContact(props: Props) {
    const {
        contactData: { link, ID },
    } = props;

    return (
        <a href={link} aria-label={IconLabels[ID]}>
            {Icons[ID]}
        </a>
    );
}

export default SingleContact;
