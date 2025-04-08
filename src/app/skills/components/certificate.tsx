import { CertificateType } from "@/types";

interface Props {
    certificate: CertificateType;
}

const createCertificateClassName = (isProfessional: CertificateType["isProfessional"]) => {
    return isProfessional ? "certificate" : " certificate certificate--non-professional";
};

export function Certificate(props: Props) {
    const {
        certificate: { link, operator, name, isProfessional },
    } = props;
    return (
        <li className={createCertificateClassName(isProfessional)}>
            <h3>{name}</h3>
            <a href={link}>{operator}</a>
        </li>
    );
}

export default Certificate;
