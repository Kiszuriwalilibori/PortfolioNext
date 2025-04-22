"use client";
import { useId } from "react";

import isEmpty from "lodash/isEmpty";

import { Checkboxes } from "./parts";
import { ProjectCategoryStack } from "./styled";
import { projects } from "@/data/projects";
import { useGetProjects } from "@/hooks";
import { ProjectUtils } from "@/models/projects";

import PageTitle from "@/components/pageTitle";
import SingleProject from "./parts/project";

export default function Projects() {
    const features = ProjectUtils.getFeatures(projects);
    const data = projects;
    const { visibleProjects, changeHandler } = useGetProjects(features, data);

    const projectsCategoryA = ProjectUtils.filterByCategory([...visibleProjects], "A").sort(ProjectUtils.sortProjectsByTitle);

    const projectsCategoryB = ProjectUtils.filterByCategory([...visibleProjects], "B").sort(ProjectUtils.sortProjectsByTitle);

    const ID = useId();
    return (
        <section className="projects" id="Projects Page Content">
            <div className="projects__content">
                <div className="container">
                    <PageTitle title="Projects" />
                    <Checkboxes features={features} handleChange={changeHandler} />
                    {!isEmpty(projectsCategoryA) && (
                        <ProjectCategoryStack spacing={2}>
                            <h2>Primary, refined works with long commit history and usually a lot of features</h2>
                            {projectsCategoryA.map(project => (
                                <SingleProject key={ProjectUtils.getKey(ID, project)} project={project} />
                            ))}
                        </ProjectCategoryStack>
                    )}
                    {!isEmpty(projectsCategoryB) && (
                        <ProjectCategoryStack spacing={2}>
                            <h2>Better leave unseen... at least code. Old, not maintained and not modernised works</h2>
                            {projectsCategoryB.map(project => (
                                <SingleProject key={ProjectUtils.getKey(ID, project)} project={project} />
                            ))}
                        </ProjectCategoryStack>
                    )}
                </div>
            </div>
        </section>
    );
}
