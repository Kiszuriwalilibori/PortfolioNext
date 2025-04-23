import { Project } from "@/types";
import createProjectNav from "../utils";
import ToNext from "./ToNext";
import ToPrevious from "./ToPrevious";

interface Props {
    projectSlug: Project["slug"];
}

export const ProjectsSwitch = (props: Props) => {
    const { projectSlug } = props;

    const { projectNext, projectPrevious } = createProjectNav(projectSlug);
    return (
        <>
            {projectNext && <ToNext target={projectNext} />}
            {projectPrevious && <ToPrevious target={projectPrevious} />}
        </>
    );
};
export default ProjectsSwitch;
