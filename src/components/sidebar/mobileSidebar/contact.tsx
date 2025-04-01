import React from "react";

import Icons, { IconLabels } from "../../common/icons";

import { ContactType } from "@/types";

interface Props {
    data: ContactType;
}

export function Contact(props: Props) {
    const {
        data: { /*text,*/ link, ID /*, alias*/ },
    } = props;

    return (
        <a href={link} aria-label={IconLabels[ID]}>
            {Icons[ID]}
        </a>
    );
}

export default Contact;
