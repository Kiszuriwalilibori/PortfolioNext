import isEmpty from "lodash/isEmpty";

import { useId, useMemo } from "react";

import SingleProject from "./components/project";
import { useGetProjects } from "../../../hooks";
import { Checkboxes } from "./components";
import { ProjectsPageProps } from "../../../../types";
import { ProjectCategoryStack } from "./styled";
import { PageTitle } from "../../../components";

function ProjectsPageContent(props: ProjectsPageProps) {
    const { data, featuresList } = props;
    const { visibleProjects, changeHandler } = useGetProjects(featuresList, data);

    const projectsCategoryA = useMemo(
        () =>
            visibleProjects
                .filter(item => item.category === "A" || item.category === "B")
                .sort(function (a, b) {
                    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                }),
        [visibleProjects]
    );
    const projectsCategoryB = useMemo(
        () =>
            visibleProjects
                .filter(item => item.category === "X") // todo temporary fix
                .sort(function (a, b) {
                    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                }),
        [visibleProjects]
    );
    const projectsCategoryC = useMemo(
        () =>
            visibleProjects
                .filter(item => item.category === "C")
                .sort(function (a, b) {
                    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                }),
        [visibleProjects]
    );

    const ID = useId();
    return (
        <section className="projects">
            <div className="projects__content">
                <div className="container">
                    <PageTitle title="Projects" />
                    <Checkboxes features={featuresList} handleChange={changeHandler} />
                    {!isEmpty(projectsCategoryA) && (
                        <ProjectCategoryStack spacing={2}>
                            <h2>Primary, refined works with long commit history and usually lot of features</h2>
                            {projectsCategoryA.map(item => (
                                <SingleProject key={`${ID}--${item.title}`} projectData={item} />
                            ))}
                        </ProjectCategoryStack>
                    )}
                    {!isEmpty(projectsCategoryB) && (
                        <ProjectCategoryStack spacing={2}>
                            <h2>
                                Secondary projects - basically correct but very simple, usually just recruitment tasks
                            </h2>
                            {projectsCategoryB.map(item => (
                                <SingleProject key={`${ID}--${item.title}`} projectData={item} />
                            ))}
                        </ProjectCategoryStack>
                    )}
                    {!isEmpty(projectsCategoryC) && (
                        <ProjectCategoryStack spacing={2}>
                            <h2>Better leave unseen... at least code. Old, not maintained and not modernised works</h2>
                            {projectsCategoryC.map(item => (
                                <SingleProject key={`${ID}--${item.title}`} projectData={item} />
                            ))}
                        </ProjectCategoryStack>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProjectsPageContent;
