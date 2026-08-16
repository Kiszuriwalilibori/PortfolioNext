import isEmpty from "lodash/isEmpty";
import Image from "next/image";

import { useId } from "react";
import { Chip, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Project } from "@/types";

import { ChipsContainer } from "../page.styles";
import { ProjectUtils } from "@/models/projects";

import ButtonMore from "./buttonMore";
import { ProjectAccordion, ProjectAccordionDetails, ProjectAccordionHeader, ProjectHeader, ProjectCategoryIndicator, ProjectPaper } from "./SingleProject.styles";

const slideSize = { width: 300, height: 200 };

const SingleProject = ({ project }: { project: Project }) => {
    const { description, title, features, slides, slug, category } = project;

    const ID = useId();
    const sortedFeatures = features.sort(ProjectUtils.sortFeatures);

    return (
        <ProjectPaper elevation={1}>
            <ProjectAccordion defaultExpanded={false} disableGutters elevation={0}>
                <ProjectAccordionHeader expandIcon={<ExpandMoreIcon />} aria-controls={`project-${slug}-content`} id={`project-${slug}-header`}>
                    <ProjectHeader>
                        <ProjectCategoryIndicator category={category} aria-hidden="true" />

                        <Typography variant="h3">{title}</Typography>
                    </ProjectHeader>
                </ProjectAccordionHeader>

                <ProjectAccordionDetails id={`project-${slug}-content`}>
                    <article className="project" aria-label={"informations about project " + title}>
                        <div className="project__data">
                            <Typography variant="subtitle2" component="h4" gutterBottom>
                                {description}
                            </Typography>

                            <Typography variant="subtitle1" component="h4">
                                Features:
                            </Typography>

                            <ChipsContainer>
                                {sortedFeatures.map(feature => (
                                    <Chip label={feature} key={ProjectUtils.getFeatureKey(ID, feature)} />
                                ))}
                            </ChipsContainer>

                            <ButtonMore title={title} slug={slug} />
                        </div>

                        {slides && !isEmpty(slides) && (
                            <div className="project__slides">
                                {slides.map((slide, idx) => (
                                    <Image key={ProjectUtils.getSlideKey(ID, slide)} className="image" src={slide} alt={`Screenshot of ${title} project - slide ${idx + 1}`} width={slideSize.width} height={slideSize.height} />
                                ))}
                            </div>
                        )}
                    </article>
                </ProjectAccordionDetails>
            </ProjectAccordion>
        </ProjectPaper>
    );
};

export default SingleProject;
