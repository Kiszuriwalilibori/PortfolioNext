import Content from "../../src/components/projects";
import { Project } from "../../types";

function createFeatures(data: Project[]) {
    const temp: string[] = [];
    data.forEach(item => item.features && temp.push(...item.features));
    return Array.from(new Set(temp));
}

interface Props {
    data: Project[];
    allFeatures: string[];
    title: string;
}

export default function Projects(props: Props) {
    const { data, allFeatures, title } = props;

    return (
        <section className="projects">
            <article className="projects__content">
                <Content data={data} featuresList={allFeatures} />
            </article>
        </section>
    );
}

export async function getStaticProps() {
    const { projects } = await import("../../data/projects.json");
    const allFeatures = createFeatures(projects);
    return {
        props: {
            data: projects,
            allFeatures: allFeatures,
        },
    };
}
