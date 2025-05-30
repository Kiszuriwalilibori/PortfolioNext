import { projects } from "@/data/projects";
import { ProjectUtils } from "@/models/projects";
import { SingleProjectInformations, SingleProjectInformationsColumn, StackDivider } from "./styled";
import { Description, Features, Header, Links, ProjectsSwitch } from "./parts";

import Comments from "./Comments";
import AddCommentsButton from "./Comment/AddCommentsButton";

// import { test } from "@/utils/test";

export async function generateStaticParams() {
    return projects.map(project => ({
        projectSlug: project.slug,
    }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ projectSlug: string }> }) {
    // test();
    const projectSlug = (await params).projectSlug;

    const project = ProjectUtils.getProjectBySlug(projects, projectSlug);
    if (!project) {
        return <h1>Project not found</h1>;
    }

    // const showMessage = useMessage();
    // const [isModalOpen, openModal, closeModal] = useBoolean(false);

    // const { projectNext, projectPrevious } = createProjectNav(projectSlug);

    // const { user, isLogged } = useAuthContext();

    // const handleSuccess = () => {
    //     openModal();
    // };

    // const handleError = useCallback((message: string) => {
    //     showMessage.error("Login attempt failure: " + message);
    // }, []);

    // const handleLeaveACommentClick = useCallback(() => {
    //     if (isLogged) {
    //         openModal();
    //     } else {
    //         requestLogin(handleSuccess, handleError);
    //     }
    // }, [isLogged, handleError]);

    // const temporary = useCallback(() => {
    //     showMessage.warning("The service is currently out of order and there are works continuously going  on making it back active");
    // }, []);

    return (
        <>
            <ProjectsSwitch projectSlug={projectSlug} />
            <Header title={project.title} description={project.description} />
            <SingleProjectInformations direction={{ md: "row" }} divider={<StackDivider />}>
                <SingleProjectInformationsColumn>
                    <Links github={project.github} live={project.live} />
                    <AddCommentsButton ID={project.ID} title={project.title} />

                    <Comments projectID={project.ID} title={project.title} />
                </SingleProjectInformationsColumn>

                <SingleProjectInformationsColumn>
                    <h2>Story</h2>
                    {project.story}
                </SingleProjectInformationsColumn>

                <SingleProjectInformationsColumn>
                    <h2>Tech</h2>
                    <Description longDescription={project.longDescription} />
                    <Features features={project.features} />
                </SingleProjectInformationsColumn>
            </SingleProjectInformations>
        </>
    );
}
