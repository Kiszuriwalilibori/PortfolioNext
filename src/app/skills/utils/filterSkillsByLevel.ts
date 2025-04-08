import { SkillInfo } from "@/types";
/**
 * Filters an array of skills based on the specified level.
 *
 * @param {SkillInfo[]} ary - The array of skills to filter.
 * @param {string} level - The level to filter by.
 * @returns {SkillInfo[]} - An array of skills that match the specified level.
 */

export default function filterSkillsByLevel(ary: SkillInfo[], level: string) {
    const result = ary.filter(skill => {
        return skill.level === level ? true : false;
    });
    return result;
}
