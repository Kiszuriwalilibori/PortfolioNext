import Box from "@mui/material/Box";

import { useId } from "react";
import { Skills } from "@/types";

interface Props {
    skillsSelectedByCategory: Skills;
    heading: string;
}

function SkillsByCategory(props: Props) {
    const { skillsSelectedByCategory, heading } = props;
    const ID = useId();

    return (
        <Box sx={{ width: "100%", paddingBottom: 2 }}>
            <h3>{heading}</h3>
            <ul>
                {skillsSelectedByCategory.map(item => {
                    return <li key={`${ID}-${item.skill}`}> {item.skill}</li>;
                })}
            </ul>
        </Box>
    );
}

export default SkillsByCategory;
