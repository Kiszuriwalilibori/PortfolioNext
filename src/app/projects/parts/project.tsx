import isEmpty from "lodash/isEmpty";
import Image from "next/image";

import { useId } from "react";
import { Chip, Paper, Typography } from "@mui/material";

import { Project } from "@/types";

import { ChipsContainer } from "../styled";
import { ProjectUtils } from "@/models/projects";

import ButtonMore from "./buttonMore";

const slideSize = { width: 300, height: 200 };
const SingleProject = ({ project }: { project: Project }) => {
    const { description, title, features, slides } = project;

    const ID = useId();
    const sortedFeatures = features.sort(ProjectUtils.sortFeatures);

    return (
        <Paper
            elevation={1}
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
        >
            <article className="project" aria-label={"informations about project " + title}>
                <div className="project__data">
                    <Typography variant="h3">{title}</Typography>
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
                    <ButtonMore title={title} />
                </div>
                {slides && !isEmpty(slides) && (
                    <div className="project__slides">
                        {slides.map(slide => (
                            <Image key={ProjectUtils.getSlideKey(ID, slide)} className="image" src={slide} alt={title} width={slideSize.width} height={slideSize.height} />
                        ))}
                    </div>
                )}
            </article>
        </Paper>
    );
};

export default SingleProject;
