import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons: { [key: string]: any } = {
    email: <FontAwesomeIcon icon={faEnvelope} />,
    facebook: <FontAwesomeIcon icon={faFacebook} />,
    github: <FontAwesomeIcon icon={faGithub} />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} />,
};

export default Icons;
// interface Props{
//   ID: string;
// }
// const Icon =(props:Props)=>
// {
// const{ID} = props;

// switch (ID) {
//     case "email":
//         return <FontAwesomeIcon icon={faEnvelope} />;
//         break;
//     case "facebook":
//         day = "Monday";
//         break;
//     case "linkedin":
//         day = "Tuesday";
//         break;
//     case "github":
//         day = "Wednesday";
//         break;

// }

// }
