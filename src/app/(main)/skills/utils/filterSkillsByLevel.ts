import { SkillInfo } from "@/types";
import { SkillLevel } from "@/data/skills";
/**
 * Filters an array of skills based on the specified level.
 *
 * @param {SkillInfo[]} ary - The array of skills to filter.
 * @param {SkillLevel} level - The level to filter by.
 * @returns {SkillInfo[]} - An array of skills that match the specified level.
 */

export default function filterSkillsByLevel(ary: SkillInfo[], level: SkillLevel) {
    const result = ary.filter(skill => {
        return skill.level === level ? true : false;
    });
    return result;
}
