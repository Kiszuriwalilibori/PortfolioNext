import isEmpty from "lodash/isEmpty";
import Image from "next/image";
import Link from "next/link";

import { useId } from "react";
import { Project } from "../../../types";
import { Button, Chip } from "@mui/material";
import { ChipsContainer } from "../../../styles/styled";
import MoreButton from "./morebutton";

interface Props {
    projectData: Project;
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
        <article className="project">
            <MoreButton title={title} />
            <div>
                <h5 className="project__title">{title}</h5>
                <h6 className="project__subtitle">{description}</h6>
                <h6 className="project__features-header">Features: </h6>

                <ChipsContainer>
                    {sortedFeatures.map(feature => (
                        <Chip label={feature} key={`${ID}--${feature}`} component="li" />
                    ))}
                </ChipsContainer>
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
    );
};

export default Project;
