import isEmpty from "lodash/isEmpty";

import { memo, useCallback, useId, useMemo, useState } from "react";

import SingleProject from "./project";
import getVisibleProjects from "./getVisibleProjects";
import Checkboxes from "./checkboxes";

import { ProjectsPageProps } from "../../../types";

const Projects = (props: ProjectsPageProps) => {
    const { data, featuresList } = props;
    const [activeFeatures, setActiveFeatures] = useState(featuresList);

    const handleChange = useCallback(
        (ary: string[]) => {
            if (ary.length) {
                setActiveFeatures(ary);
            } else {
                setActiveFeatures(featuresList);
            }
        },
        [featuresList]
    );

    const visibleProjects = getVisibleProjects(data, activeFeatures, featuresList);

    const projectsCategoryA = useMemo(() => visibleProjects.filter(item => item.category === "A"), [visibleProjects]);
    const projectsCategoryB = useMemo(() => visibleProjects.filter(item => item.category === "B"), [visibleProjects]);
    const projectsCategoryC = useMemo(() => visibleProjects.filter(item => item.category === "C"), [visibleProjects]);

    const ID = useId();
    return (
        <section className="projects">
            <div className="projects__content">
                <div className="container">
                    <h2 className="page-header">Projects</h2>
                    <Checkboxes values={featuresList} handleChange={handleChange} />
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
};

export default memo(Projects);
