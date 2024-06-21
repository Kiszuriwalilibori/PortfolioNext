import createFeaturesList from "./createFeaturesList";

import { ProjectsPageContent } from "../../src/components/PageContents";
import { ProjectsPageProps } from "../../src/types";

export default function Projects(props: ProjectsPageProps) {
    const { data, featuresList } = props;
    return <ProjectsPageContent data={data} featuresList={featuresList} />;
}

export async function getStaticProps() {
    const { projects } = await import("../../data/projects.json");

    const featuresList = createFeaturesList(projects);

    return {
        props: {
            data: projects,
            featuresList,
        },
    };
}
