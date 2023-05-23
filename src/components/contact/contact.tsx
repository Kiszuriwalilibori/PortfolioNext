import React from "react";

import Icons from "./icons";

import { Contact } from "../../../types";

interface Props {
    data: Contact;
}

function Contact(props: Props) {
    const {
        data: { text, link, ID, alias },
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
