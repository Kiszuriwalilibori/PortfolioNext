import Content from "../src/components/skills";
import { Skill, Education } from "../types";
interface Props {
    data: Skill[];
    title: string;
    education: Education;
}

export default function Skills(props: Props) {
    const { data, title, education } = props;

    return (
        <section className="skills">
            <article className="skills__content">
                <Content skills={data} education={education} />
            </article>
        </section>
    );
}

export async function getStaticProps() {
    const { skills, education } = await import("../data/skills.json");

    console.log(education, "education from getstat");
    return {
        props: {
            data: skills,
            title: "skills",
            education: education,
        },
    };
}
