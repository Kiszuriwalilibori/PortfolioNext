import PageContent from "../../src/components/projects";
import createFeaturesList from "./createFeaturesList";

import { ProjectsPageProps } from "../../types";

export default function Projects(props: ProjectsPageProps) {
    const { data, featuresList } = props;
    return <PageContent data={data} featuresList={featuresList} />;
}

export async function getStaticProps() {
    const { projects } = await import("../../data/projects.json");
    const featuresList = createFeaturesList(projects);
    return {
        props: {
            data: projects,
            featuresList: featuresList,
        },
    };
}
