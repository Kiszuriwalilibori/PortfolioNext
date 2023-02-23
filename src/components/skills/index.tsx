import { useId } from "react";
import { Skill, Education } from "../../../types";
import SkillsList from "./skillsList";
import EducationItem from "./educationItem";

interface Props {
    skills: Skill[];
    education: Education;
}

function filterSkillsByLevel(ary: Skill[], level: string) {
    const result = ary.filter(skill => {
        return skill.level === level ? true : false;
    });
    return result;
}
export default function Skills(props: Props) {
    const { skills, education } = props;
    const good = filterSkillsByLevel(skills, "4");
    const fair = filterSkillsByLevel(skills, "3");
    const basic = filterSkillsByLevel(skills, "1");
    const ID = useId();

    console.log(education, "props - edu");
    return (
        <article className="wrapper">
            <h2>{"Skills & education"}</h2>
            <h3>Skills:</h3>
            <h4>I feel reasonably comfortable with: </h4>
            <SkillsList items={good} />
            <h4>Continuously improving:</h4>
            <SkillsList items={fair} />
            <h4>Basic level:</h4>
            <SkillsList items={basic} />
            <h3>Education:</h3>
            <ul className="education">
                {education.map(item => {
                    return <EducationItem key={`${ID}-${item.school}`} item={item} />;
                })}
            </ul>
        </article>
    );
}
