import React from "react";

import Icons from "../contact/icons";

import { Contact } from "../../../types";

interface Props {
    data: Contact;
}

const Contact = (props: Props) => {
    const {
        data: { text, link, ID, alias },
    } = props;

    return <a href={link}>{Icons[ID]}</a>;
};

export default Contact;
