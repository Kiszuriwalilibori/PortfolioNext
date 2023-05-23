import SingleProjectPageContent from "../../src/components/projects/single-project";
import { Project } from "../../types";
import ProjectLayout from "../../src/components/project-layout";

// TODO nie wiem czemu te przepisanie służy

function ProjectPage(data: Project) {
    return <SingleProjectPageContent data={data} />;
}

ProjectPage.getLayout = function (page: JSX.Element) {
    return <ProjectLayout>{page}</ProjectLayout>;
};
export default ProjectPage;

export async function getStaticPaths() {
    const { projects } = await import("../../data/projects.json");

    const allPaths = projects.map(path => {
        return {
            params: {
                id: path.title,
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context: any) {
    const id = context.params.id;
    const { projects } = await import("../../data/projects.json");
    const data = projects.find(project => id === project.title);

    return {
        props: { data },
    };
}
