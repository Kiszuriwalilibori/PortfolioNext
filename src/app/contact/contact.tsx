import React from "react";

import { ContactType } from "@/types";

import Icons from "@/components/common/icons";

interface Props {
    contactData: ContactType;
}

function ContactDetails(props: Props) {
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

export default ContactDetails;
