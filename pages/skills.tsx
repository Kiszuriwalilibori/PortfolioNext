import PageContent from "../src/components/skills";

import { SkillsPageProps } from "../types";

export default function Skills(props: SkillsPageProps) {
    const { skills, education, certs } = props;

    return <PageContent skills={skills} education={education} certs={certs} />;
}

export async function getStaticProps() {
    const { skills, education, certs } = await import("../data/skills.json");
    return {
        props: {
            skills: skills,
            education: education,
            certs: certs,
        },
    };
}
