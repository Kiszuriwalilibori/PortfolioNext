import isEmpty from "lodash/isEmpty";

import { memo, useId, useMemo } from "react";

import SingleProject from "./project";

import Checkboxes from "./checkboxes";

import useGetProjects from "../../hooks/useGetProjects";

import { ProjectsPageProps } from "../../../types";

function Projects(props: ProjectsPageProps) {
    const { data, featuresList } = props;
    const { visibleProjects, changeHandler } = useGetProjects(featuresList, data);

    const projectsCategoryA = useMemo(
        () =>
            visibleProjects
                .filter(item => item.category === "A")
                .sort(function (a, b) {
                    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                }),
        [visibleProjects]
    );
    const projectsCategoryB = useMemo(
        () =>
            visibleProjects
                .filter(item => item.category === "B")
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
                    <h2 className="page__title">Projects</h2>
                    <Checkboxes values={featuresList} handleChange={changeHandler} />
                    {!isEmpty(projectsCategoryA) && (
                        <article className="category-container">
                            <h4>Primary, refined works with long commit history and usually lot of features</h4>
                            {projectsCategoryA.map(item => (
                                <SingleProject key={`${ID}--${item.title}`} projectData={item} />
                            ))}
                        </article>
                    )}
                    {!isEmpty(projectsCategoryB) && (
                        <article className="category-container">
                            <h4>
                                Secondary projects - basically correct but very simple, usually just recruitment tasks
                            </h4>
                            {projectsCategoryB.map(item => (
                                <SingleProject key={`${ID}--${item.title}`} projectData={item} />
                            ))}
                        </article>
                    )}
                    {!isEmpty(projectsCategoryC) && (
                        <article className="category-container">
                            <h4>Better leave unseen... at least code. Old, not maintained and not modernised works</h4>
                            {projectsCategoryC.map(item => (
                                <SingleProject key={`${ID}--${item.title}`} projectData={item} />
                            ))}
                        </article>
                    )}
                </div>
            </div>
        </section>
    );
}

export default memo(Projects);
