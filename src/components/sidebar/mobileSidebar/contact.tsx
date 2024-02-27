import React from "react";

import Icons, { IconLabels } from "../../common/icons";

import { Contact } from "types";

interface Props {
    data: Contact;
}

function Contact(props: Props) {
    const {
        data: { text, link, ID, alias },
    } = props;

    return (
        <a href={link} aria-label={IconLabels[ID]}>
            {Icons[ID]}
        </a>
    );
}

export default Contact;
