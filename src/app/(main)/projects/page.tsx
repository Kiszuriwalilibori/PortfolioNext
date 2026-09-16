"use client";

import { useId, useState } from "react";

import isEmpty from "lodash/isEmpty";

import { Switch, Typography } from "@mui/material";
import { ProjectCategoryLegend } from "./parts/ProjectCategoryLegend";
import { ProjectCategoryStack, ProjectSearchField, ProjectSortControls, ProjectSortSwitch } from "./page.styles";
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
    // const { visibleProjects, changeHandler } = useGetProjects(features, data);
    const { visibleProjects, changeHandler, searchQuery, searchHandler } = useGetProjects(features, data);
    const sortedProjects = ProjectUtils.sortProjects(visibleProjects, sortByCategory);

    const isEmptyState = isEmpty(visibleProjects);

    return (
        <section className="projects" id="Projects Page Content">
            <div className="projects__content">
                <div className="container">
                    <PageTitle title="Projects" />

                    <Checkboxes features={features} handleChange={changeHandler} />
                    <h2>Search projects by name</h2>
                    <ProjectSearchField type="search" label="Search projects" placeholder="Search by project name" value={searchQuery} onChange={event => searchHandler(event.target.value)} fullWidth />
                    {isEmptyState ? (
                        <NotFound message="Nie znaleziono projektów dla wybranych filtrów" />
                    ) : (
                        <>
                            <ProjectCategoryLegend />
                            <ProjectSortSwitch>
                                <ProjectSortControls>
                                    <Typography id="projects-sort-label" component="span" className="sort-label">
                                        Sort projects by:
                                    </Typography>
                                    <Typography component="span" className={!sortByCategory ? "active" : undefined}>
                                        Alphabetical
                                    </Typography>

                                    <Switch
                                        checked={sortByCategory}
                                        onChange={event => setSortByCategory(event.target.checked)}
                                        slotProps={{
                                            input: {
                                                "aria-labelledby": "projects-sort-label",
                                            },
                                        }}
                                    />

                                    <Typography component="span" className={sortByCategory ? "active" : undefined}>
                                        Category
                                    </Typography>
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
