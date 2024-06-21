import isEmpty from "lodash/isEmpty";
import Image from "next/image";
import Link from "next/link";

import { useId } from "react";
import { ProjectType, ProjectNav } from "types";
import { Button, Chip, Paper, Typography } from "@mui/material";
import { ChipsContainer } from "../styled";
import ButtonMore from "./buttonMore";

interface Props {
    projectData: ProjectType;
}

const Project = (props: Props) => {
    const {
        projectData: { description, title, features, slides },
    } = props;
    const ID = useId();
    const sortedFeatures = features.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

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
                            <Chip label={feature} key={`${ID}--${feature}`} />
                        ))}
                    </ChipsContainer>
                    <ButtonMore title={title} />
                </div>
                {slides && !isEmpty(slides) && (
                    <div className="project__slides">
                        {slides.map(slide => (
                            <Image
                                key={`${ID}--${slide}`}
                                className="image"
                                src={slide}
                                alt={title}
                                width={300}
                                height={200}
                            />
                        ))}
                    </div>
                )}
            </article>
        </Paper>
    );
};

export default Project;
