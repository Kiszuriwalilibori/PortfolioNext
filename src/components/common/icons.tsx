import { faBackward, faEnvelope, faFileDownload, faForward, faGlobe, faHandFist, faMicrophone, faPaperPlane, faXmark, faPenToSquare, faPencil } from "@fortawesome/free-solid-svg-icons";

import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JSX } from "react";
import React from "react";

export const Icons: { [key: string]: JSX.Element } = {
    email: <FontAwesomeIcon icon={faEnvelope} aria-label="Send an email to author" />,
    facebook: <FontAwesomeIcon icon={faFacebook} aria-label="Find aythor on facebook" />,
    github: <FontAwesomeIcon icon={faGithub} aria-label="Click to see the git hub repository of the project" />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} aria-label="Find author on LinkedIn" />,
    live: <FontAwesomeIcon icon={faGlobe} aria-label="Click to see live version of the project" />,
    send: <FontAwesomeIcon icon={faPaperPlane} aria-label="Go to project details page" />,
    cv: <FontAwesomeIcon icon={faFileDownload} aria-label="Downolad CV" />,
    close: <FontAwesomeIcon icon={faXmark} aria-label="close" style={{ margin: "0 auto" }} size="1x" />,
    forward: <FontAwesomeIcon icon={faForward} aria-label="next" />,
    backward: <FontAwesomeIcon icon={faBackward} aria-label="previous" />,
    motivation: <FontAwesomeIcon icon={faHandFist} />,
    microphone: <FontAwesomeIcon icon={faMicrophone} />,
    edit: <FontAwesomeIcon icon={faPencil} aria-label="edit" style={{ margin: "0 auto" }} size="1x" />,
};

export const IconLabels: { [key: string]: string } = {
    edit: "Edit comment",
    email: "Send email to author",
    facebook: "Visit Facebook profile",
    github: "View GitHub repository",
    linkedin: "Visit LinkedIn profile",
    live: "View live project",
    send: "View project details",
    cv: "Download CV",
    close: "Close dialog",
    motivation: "View motivation",
    microphone: "Activate microphone",
};

export default Icons;
