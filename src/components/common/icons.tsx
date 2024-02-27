import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Icons: { [key: string]: JSX.Element } = {
    email: <FontAwesomeIcon icon={faEnvelope} aria-label="Send an email to author" />,
    facebook: <FontAwesomeIcon icon={faFacebook} aria-label="Find aythor on facebook" />,
    github: <FontAwesomeIcon icon={faGithub} aria-label="Click to see the git hub repository of the project" />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} aria-label="Find author on LinkedIn" />,
    live: <FontAwesomeIcon icon={faGlobe} aria-label="Click to see live version of the project" />,
    send: <FontAwesomeIcon icon={faPaperPlane} aria-label="Go to project details page" />,
    cv: <FontAwesomeIcon icon={faFileDownload} aria-label="Downolad CV" />,
    close: <FontAwesomeIcon icon={faXmark} aria-label="close" />,
    forward: <FontAwesomeIcon icon={faForward} aria-label="next" />,
    backward: <FontAwesomeIcon icon={faBackward} aria-label="previous" />,
};

export const IconLabels: { [key: string]: string } = {
    email: "Send e-mail",
    facebook: "Jump to Facebook",
    github: "Jump to GitHub",
    linkedin: "Jump to LinkedIn",
    live: "Jump to live version of this project",
    send: "See details",
    cv: "Download CV",
    close: "Close",
};

export default Icons;
