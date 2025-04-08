import Paper from "@mui/material/Paper";
import { EducationData } from "@/types";

interface Props {
    educationData: EducationData;
}

function EducationItem(props: Props) {
    const {
        educationData: { period, school, subject },
    } = props;

    return (
        <li className="education__item">
            <div className="period">{period && <em>{period}</em>}</div>
            <h3>{school}</h3>
            <p>{subject}</p>
        </li>
    );
}

export default EducationItem;
