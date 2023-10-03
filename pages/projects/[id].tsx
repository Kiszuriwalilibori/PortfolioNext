import SingleProjectPageContent from "../../src/components/PageContents/singleProjectPageContent/singleProjectPageContent";
import { Project } from "../../types";
import ProjectLayout from "../../src/components/project-layout";
import { GetStaticPropsContext } from "next";

function ProjectPage(data: { data: Project }) {
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

export async function getStaticProps(context: GetStaticPropsContext) {
    const id = context.params ? context.params.id : undefined;
    const { projects } = await import("../../data/projects.json");
    const data = projects.find(project => id === project.title);

    return {
        props: { data },
    };
}
