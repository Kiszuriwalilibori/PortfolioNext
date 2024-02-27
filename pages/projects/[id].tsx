import SingleProjectPageContent from "../../src/components/PageContents/singleProjectPageContent/singleProjectPageContent";
import { CommentType, Project } from "../../src/types";
import ProjectLayout from "../../src/components/project-layout";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

function ProjectPage(props: { data: Project; comments: CommentType[]; titles: string[] }) {
    const { data, comments, titles } = props;
    return <SingleProjectPageContent data={data} comments={comments} titles={titles} />;
}

ProjectPage.getLayout = function (page: JSX.Element) {
    return <ProjectLayout>{page}</ProjectLayout>;
};
export default ProjectPage;

// export async function getServerSidePaths() {
//     const { projects } = await import("../../data/projects.json");

//     const allPaths = projects.map(path => {
//         return {
//             params: {
//                 id: path.title,
//             },
//         };
//     });

//     return {
//         paths: allPaths,
//         fallback: false,
//     };
// }

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

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const id = context.params ? context.params.id : undefined;
//     const { projects } = await import("../../data/projects.json");
//     const { comments } = await import("../../data/comments.json");
//     const data = projects.find(project => id === project.title);

//     const projectComments = comments.filter(comment => {
//         return comment.project == id;
//     });

//     return {
//         props: { data, comments: projectComments },
//     };
// }

export async function getStaticProps(context: GetStaticPropsContext) {
    const id = context.params ? context.params.id : undefined;
    const { projects } = await import("../../data/projects.json");
    const { comments } = await import("../../data/comments.json");
    const data = projects.find(project => id === project.title);

    const projectComments = comments.filter(comment => {
        return comment.project == id;
    });

    // console.log(" getStaticProps runs comments ", projectComments);

    const titles = projects.map(project => {
        return project.title;
    });

    return {
        props: { data, comments: projectComments, titles },
        revalidate: 10,
    };
}
