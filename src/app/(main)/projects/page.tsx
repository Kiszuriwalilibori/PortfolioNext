"use client";

import { useId, useState } from "react";

import isEmpty from "lodash/isEmpty";

import { Switch, Typography } from "@mui/material";
import { ProjectCategoryLegend } from "./parts/ProjectCategoryLegend";
import { ProjectCategoryStack, ProjectSortControls, ProjectSortSwitch } from "./page.styles";
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

    const sortedProjects = ProjectUtils.sortProjects(visibleProjects, sortByCategory);

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
                            <ProjectCategoryLegend />
                            <ProjectSortSwitch>
                                <ProjectSortControls>
                                    <Typography component="span">Alphabetical</Typography>

                                    <Switch
                                        checked={sortByCategory}
                                        onChange={event => setSortByCategory(event.target.checked)}
                                        slotProps={{
                                            input: {
                                                "aria-label": "Sort projects by category instead of alphabetically",
                                            },
                                        }}
                                    />

                                    <Typography component="span">Category</Typography>
                                </ProjectSortControls>
                            </ProjectSortSwitch>

                            {/* <ProjectSortSwitch>
                                <ProjectSortControls>
                                    <FormControlLabel label="Alphabetical" labelPlacement="start" control={<Switch checked={sortByCategory} onChange={event => setSortByCategory(event.target.checked)} />} />

                                    <Typography component="span">Category</Typography>
                                </ProjectSortControls>
                            </ProjectSortSwitch> */}

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
