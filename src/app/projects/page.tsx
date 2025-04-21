"use client";

import isEmpty from "lodash/isEmpty";

import { useId, useMemo } from "react";

import SingleProject from "./parts/project";

import { Checkboxes } from "./parts";

import { ProjectCategoryStack } from "./styled";

import { projects } from "@/data/projects";
import createFeaturesList from "./createFeaturesList";
import { useGetProjects } from "@/hooks";
import PageTitle from "@/components/pageTitle";

import { ProjectUtils } from "@/models/projects";

export default function Projects() {
    const featuresList = ProjectUtils.getFeatures(projects);
    const data = projects;
    const { visibleProjects, changeHandler } = useGetProjects(featuresList, data);

    const projectsCategoryA = ProjectUtils.filterByCategory([...visibleProjects], "A").sort(ProjectUtils.sort);

    const projectsCategoryB = ProjectUtils.filterByCategory([...visibleProjects], "B").sort(ProjectUtils.sort);

    const ID = useId();
    return (
        <section className="projects" id="Projects Page Content">
            <div className="projects__content">
                <div className="container">
                    <PageTitle title="Projects" />
                    <Checkboxes features={featuresList} handleChange={changeHandler} />
                    {!isEmpty(projectsCategoryA) && (
                        <ProjectCategoryStack spacing={2}>
                            <h2>Primary, refined works with long commit history and usually a lot of features</h2>
                            {projectsCategoryA.map(item => (
                                <SingleProject key={`${ID}--${item.title}`} projectData={item} />
                            ))}
                        </ProjectCategoryStack>
                    )}
                    {!isEmpty(projectsCategoryB) && (
                        <ProjectCategoryStack spacing={2}>
                            <h2>Better leave unseen... at least code. Old, not maintained and not modernised works</h2>
                            {projectsCategoryB.map(item => (
                                <SingleProject key={`${ID}--${item.title}`} projectData={item} />
                            ))}
                        </ProjectCategoryStack>
                    )}
                </div>
            </div>
        </section>
    );
}
