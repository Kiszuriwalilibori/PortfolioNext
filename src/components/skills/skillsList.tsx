import { useId } from "react";
import { Skills } from "../../../types";

interface Props {
    items: Skills;
}

const SkillsList = (props: Props) => {
    const { items } = props;
    const ID = useId();
    return (
        <ul>
            {items.map(item => {
                return <li key={`${ID}-${item.skill}`}> {item.skill}</li>;
            })}
        </ul>
    );
};

export default SkillsList;
