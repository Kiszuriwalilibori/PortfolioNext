"use client";

import { Comment } from "@/types";
import Gravatar from "react-gravatar";

interface Props {
    authorEmail: Comment["authorEmail"] | undefined;
}

export const CustomGravatar = (props: Props) => {
    const { authorEmail } = props;
    if (!authorEmail) return null;

    return <Gravatar email={authorEmail} size={40} style={{ borderRadius: "50%" }} />;
};

export default CustomGravatar;
