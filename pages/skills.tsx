import Content from "../src/components/skills";
import { Skill, Education, Cert } from "../types";
interface Props {
    data: Skill[];
    title: string;
    education: Education;
    certs: Cert[];
}

export default function Skills(props: Props) {
    const { data, title, education, certs } = props;

    return (
        <section className="skills">
            <article className="skills__content">
                <Content skills={data} education={education} certs={certs} />
            </article>
        </section>
    );
}

export async function getStaticProps() {
    const { skills, education, certs } = await import("../data/skills.json");
    return {
        props: {
            data: skills,
            title: "skills",
            education: education,
            certs: certs,
        },
    };
}
