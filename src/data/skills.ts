// export const SkillLevels = ["good", "fair", "basic"] as const;
// export type SkillLevel = (typeof SkillLevels)[number];

import { SkillInfo } from "@/types";

export const skills: SkillInfo[] = [
    { skill: "HTML", level: "good" },
    { skill: "React.js", level: "good" },
    { skill: "Redux", level: "good" },
    { skill: "CSS/SASS", level: "good" },
    { skill: "Typescript", level: "fair" },
    { skill: "Material UI", level: "fair" },
    { skill: "React-Router", level: "fair" },
    { skill: "jQuery", level: "basic" },
    { skill: "JavaScript", level: "fair" },
    { skill: "Pug", level: "basic" },
    { skill: "PWE", level: "basic" },
    { skill: "Web Workers", level: "basic" },
    { skill: "PHP", level: "basic" },
    { skill: "Next.js", level: "basic" },
    { skill: "Bootstrap", level: "basic" },
    { skill: "Zustand", level: "fair" },
];
