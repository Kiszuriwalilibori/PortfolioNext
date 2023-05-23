import { useId } from "react";
import { Skills } from "../../../types";

interface Props {
    items: Skills;
    headline: string;
}

function SkillsGroup(props: Props) {
    const { items, headline } = props;
    const ID = useId();
    return (
        <div className="skillGroup">
            <h4>{headline}</h4>
            <ul>
                {items.map(item => {
                    return <li key={`${ID}-${item.skill}`}> {item.skill}</li>;
                })}
            </ul>
        </div>
    );
}

export default SkillsGroup;
