import { Skill } from "../../../../../types";

export default function filterSkillsByLevel(ary: Skill[], level: string) {
    const result = ary.filter(skill => {
        return skill.level === level ? true : false;
    });
    return result;
}
