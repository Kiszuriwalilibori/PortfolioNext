import { Skill } from "../../../types";
interface Props {
    skills: Skill[];
}

function filterSkillsByLevel(ary: Skill[], level: string) {
    const result = ary.filter(skill => {
        return skill.level === level ? true : false;
    });
    return result;
}
export default function Skills(props: Props) {
    const { skills } = props;
    const good = filterSkillsByLevel(skills, "4");
    const fair = filterSkillsByLevel(skills, "3");
    const average = filterSkillsByLevel(skills, "2");
    const minimal = filterSkillsByLevel(skills, "1");

    return <></>;
}
