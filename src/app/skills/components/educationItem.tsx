import Paper from "@mui/material/Paper";
import { EducationData } from "@/types";
/// paper2 źle wygląda
interface Props {
    educationData: EducationData;
}

function EducationItem(props: Props) {
    const {
        educationData: { period, school, subject },
    } = props;

    return (
        <li className="educationItem paper2">
            <div className="period">{period && <em>{period}</em>}</div>
            <h3>{school}</h3>
            <p>{subject}</p>
        </li>
    );
}

export default EducationItem;
