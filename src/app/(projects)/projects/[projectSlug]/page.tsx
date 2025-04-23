import { projects } from "@/data/projects";
import { ProjectUtils } from "@/models/projects";
import Header from "./Header";
import Features from "./Features";
// import { features } from "process";
import { SingleProjectInformations, StackDivider, SingleProjectInformationsColumn, CommentsButton } from "./styled";
import Links from "./Links";
// import Comments from "./Comments";
import Description from "./Description";
// import createProjectNav from "./utils";
import ProjectsSwitch from "./ProjectsSwitch";

export default async function ProjectDetails({ params }: { params: Promise<{ projectSlug: string }> }) {
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

            {/* {projectNext && <ToNext target={projectNext} />}
            {projectPrevious && <ToPrevious target={projectPrevious} />} */}

            <SingleProjectInformations direction={{ md: "row" }} divider={<StackDivider />}>
                <SingleProjectInformationsColumn>
                    <Links github={project.github} live={project.live} />
                    <CommentsButton variant="contained" /*onClick={handleLeaveACommentClick}*/ id="Log in button">
                        Leave a comment
                    </CommentsButton>
                    {/* <Comments ID={project.ID} /> */}
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
