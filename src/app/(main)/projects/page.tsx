"use client";

import { useId, useState } from "react";

import isEmpty from "lodash/isEmpty";

import { FormControlLabel, Switch, Typography } from "@mui/material";
import { ProjectCategoryLegend, ProjectCategoryLegendItem, ProjectCategoryIndicator, ProjectCategoryStack, ProjectSortControls, ProjectSortSwitch } from "./page.styles";
import { Checkboxes } from "./parts";
import { projects } from "@/data/projects";
import { useGetProjects } from "@/hooks";
import { ProjectUtils } from "@/models/projects";

import PageTitle from "@/components/pageTitle";

import { NotFound } from "@/components/common/NotFound/NotFound";
import SingleProject from "./parts/SingleProject";

export default function Projects() {
    const ID = useId();
    const [sortByCategory, setSortByCategory] = useState(false);

    const features = ProjectUtils.getFeatures(projects);
    const data = projects;
    const { visibleProjects, changeHandler } = useGetProjects(features, data);

    const sortedProjects = [...visibleProjects].sort((projectA, projectB) => {
        if (sortByCategory && projectA.category !== projectB.category) {
            return projectA.category === "A" ? -1 : 1;
        }

        return ProjectUtils.sortProjectsByTitle(projectA, projectB);
    });

    const isEmptyState = isEmpty(visibleProjects);

    return (
        <section className="projects" id="Projects Page Content">
            <div className="projects__content">
                <div className="container">
                    <PageTitle title="Projects" />

                    <Checkboxes features={features} handleChange={changeHandler} />

                    {isEmptyState ? (
                        <NotFound message="Nie znaleziono projektów dla wybranych filtrów" />
                    ) : (
                        <>
                            <ProjectCategoryLegend>
                                <ProjectCategoryLegendItem>
                                    <ProjectCategoryIndicator
                                        aria-hidden="true"
                                        sx={{
                                            backgroundColor: "success.main",
                                        }}
                                    />

                                    <Typography>Primary, refined works with long commit history and usually a lot of features</Typography>
                                </ProjectCategoryLegendItem>

                                <ProjectCategoryLegendItem>
                                    <ProjectCategoryIndicator
                                        aria-hidden="true"
                                        sx={{
                                            backgroundColor: "warning.main",
                                        }}
                                    />

                                    <Typography>Better leave unseen... at least code. Old, not maintained and not modernised works</Typography>
                                </ProjectCategoryLegendItem>
                            </ProjectCategoryLegend>
                            <ProjectSortSwitch>
                                <ProjectSortControls>
                                    <FormControlLabel label="Alphabetical" labelPlacement="start" control={<Switch checked={sortByCategory} onChange={event => setSortByCategory(event.target.checked)} />} />

                                    <Typography component="span">Category</Typography>
                                </ProjectSortControls>
                            </ProjectSortSwitch>

                            <ProjectCategoryStack spacing={2}>
                                {sortedProjects.map(project => (
                                    <SingleProject key={ProjectUtils.getKey(ID, project)} project={project} />
                                ))}
                            </ProjectCategoryStack>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
