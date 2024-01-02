import { Certificate } from "../../../../../types";
interface Props {
    certificate: Certificate;
}
const createLiClassName = (isProfessional: Certificate["isProfessional"]) => {
    return isProfessional ? "certItem" : " certItem certItem--non-professional";
};

function Certificate(props: Props) {
    const {
        certificate: { link, operator, name, isProfessional },
    } = props;
    return (
        <li className={createLiClassName(isProfessional)}>
            <h3>{name}</h3>
            <a href={link}>{operator}</a>
        </li>
    );
}

export default Certificate;
