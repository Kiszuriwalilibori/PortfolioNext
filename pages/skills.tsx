import PageContent from "../src/components/skills";
import { Skill } from "../types";
interface Props {
    data: Skill[];
    title: string;
}

export default function Skills(props: Props) {
    const { data, title } = props;

    return (
        <>
            <h1>{title}</h1>
            <PageContent skills={data} />
        </>
    );
}

export async function getStaticProps() {
    const { skills } = await import("../data/skills.json");
    return {
        props: {
            data: skills,
            title: "skills",
        },
    };
}
