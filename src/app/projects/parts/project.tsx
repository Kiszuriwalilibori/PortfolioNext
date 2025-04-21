import isEmpty from "lodash/isEmpty";
import Image from "next/image";

import { useId } from "react";
import { Chip, Paper, Typography } from "@mui/material";

import { ProjectType } from "@/types";

import { ChipsContainer } from "../styled";
import { ProjectUtils } from "@/models/projects";

import ButtonMore from "./buttonMore";

interface Props {
    projectData: ProjectType;
}

const slideSize = { width: 300, height: 200 };
const Project = (props: Props) => {
    const {
        projectData: { description, title, features, slides },
    } = props;
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

export default Project;
