interface Props {
    certificate: { name: string; operator: string; link: string; professional: boolean };
}

function Certificate(props: Props) {
    const {
        certificate: { link, operator, name, professional },
    } = props;
    return (
        <li className={professional ? "certItem" : " certItem certItem--non-professional"}>
            <h3>{name}</h3>
            <a href={link}>{operator}</a>
        </li>
    );
}

export default Certificate;
