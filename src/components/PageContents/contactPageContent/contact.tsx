import React from "react";

import { Icons } from "../../common";

import { ContactType } from "types";

interface Props {
    contactData: ContactType;
}

function Contact(props: Props) {
    const {
        contactData: { text, link, ID, alias },
    } = props;

    return (
        <React.Fragment>
            <dt>{text}:</dt>
            <dd>
                <a href={link}>
                    {Icons[ID]}
                    <span>{alias}</span>
                </a>
            </dd>
        </React.Fragment>
    );
}

export default Contact;
