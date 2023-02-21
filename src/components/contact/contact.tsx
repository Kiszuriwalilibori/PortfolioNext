import React, { useId } from "react";
import { Contact } from "../../../types";
import Icons from "./icons";

interface Props {
    data: Contact;
}

const Contact = (props: Props) => {
    const { data } = props;

    return (
        <React.Fragment>
            <dt>{data.text}:</dt>
            <dd>
                <a href={data.link}>
                    {Icons[data.ID]}
                    <span>{data.alias}</span>
                </a>
            </dd>
        </React.Fragment>
    );
};

export default Contact;
