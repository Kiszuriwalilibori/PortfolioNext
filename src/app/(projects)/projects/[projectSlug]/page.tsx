import { projects } from "@/data/projects";
import { ProjectUtils } from "@/models/projects";
import Header from "./Header";

export default async function ProjectDetails({ params }: { params: Promise<{ projectSlug: string }> }) {
    const projectSlug = (await params).projectSlug;

    const project = ProjectUtils.getProjectBySlug(projects, projectSlug);
    if (!project) {
        return <h1>Project not found</h1>;
    }


   
    // const showMessage = useMessage();
    // const [isModalOpen, openModal, closeModal] = useBoolean(false);

    // const { projectNext, projectPrevious } = createProjectNav(data.title, titles);

    // const { ID, title, description, story, live, github, longDescription, features } = data;

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
               <Header title={project.title} description={project.description} />

            {/* {projectNext && <ToNext target={projectNext} />
            {projectPrevious && <ToPrevious target={projectPrevious} />} */}
         
            {/* {isLogged && user && isModalOpen && <AddComment isOpen={isLogged} onClose={closeModal} author={user.displayName} authorEmail={user.email} project={title} ID={ID} />} */} */}

            {/* <SingleProjectInformations direction={{ md: "row" }} divider={<StackDivider />}>
                <SingleProjectInformationsColumn>
                    <Links github={github} live={live} />
                    <CommentsButton variant="contained" onClick={handleLeaveACommentClick} id="Log in button">
                        Leave a comment
                    </CommentsButton>
                    <Comments ID={ID} />
                </SingleProjectInformationsColumn>

                <SingleProjectInformationsColumn>
                    <h2>Story</h2>
                    {story}
                </SingleProjectInformationsColumn>

                <SingleProjectInformationsColumn>
                    <h2>Tech</h2>
                    <Description longDescription={longDescription} />
                    <Features features={features} />
                </SingleProjectInformationsColumn>
            </SingleProjectInformations> */}
        </>
    );
}
