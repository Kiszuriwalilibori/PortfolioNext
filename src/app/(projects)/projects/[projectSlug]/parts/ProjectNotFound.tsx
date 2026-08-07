import { ProjectNotFoundContainer, ProjectNotFoundTitle } from "../styled";

interface Props {
    projectSlug: string;
}

export default function ProjectNotFound({ projectSlug }: Props) {
    return (
        <ProjectNotFoundContainer>
            <ProjectNotFoundTitle variant="h1">Nie znaleziono projektu {projectSlug}.</ProjectNotFoundTitle>
        </ProjectNotFoundContainer>
    );
}
