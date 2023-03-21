import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons: { [key: string]: any } = {
    email: <FontAwesomeIcon icon={faEnvelope} />,
    facebook: <FontAwesomeIcon icon={faFacebook} />,
    github: <FontAwesomeIcon icon={faGithub} />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} />,
    live: <FontAwesomeIcon icon={faGlobe} />,
};

export default Icons;
