import { EducationItem } from "../../../types";

interface Props {
    item: EducationItem;
}

function EducationItem(props: Props) {
    const { item } = props;
    return (
        <li className="educationItem">
            <div className="period">
                <i>{item.period}</i>
            </div>

            <h4>{item.school}</h4>
            <p>{item.subject}</p>
        </li>
    );
}

export default EducationItem;
