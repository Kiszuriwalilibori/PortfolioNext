import { SkillsPageContent } from "../src/components/PageContents";

import { SkillsPageProps } from "../src/types";

export default function Skills(props: SkillsPageProps) {
    const { skills, education, certificates } = props;

    return <SkillsPageContent skills={skills} education={education} certificates={certificates} />;
}

export async function getStaticProps() {
    const { skills, education, certificates } = await import("../data/skills.json");
    return {
        props: {
            skills: skills,
            education: education,
            certificates: certificates,
        },
    };
}
