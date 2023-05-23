import { Cert } from "../../../types";

interface Props {
    cert: Cert;
}

function CertItem(props: Props) {
    const {
        cert: { link, operator, name, professional },
    } = props;
    return (
        <li className={professional ? "certItem" : " certItem certItem--non-professional"}>
            <h4>{name}</h4>
            <a href={link}>{operator}</a>
        </li>
    );
}

export default CertItem;
