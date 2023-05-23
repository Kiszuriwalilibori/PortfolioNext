import React from "react";

import Icons from "../contact/icons";

import { Contact } from "../../../types";

interface Props {
    data: Contact;
}

function Contact(props: Props) {
    const {
        data: { link, ID },
    } = props;

    return <a href={link}>{Icons[ID]}</a>;
}

export default Contact;
