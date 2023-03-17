import isEmpty from "lodash/isEmpty";
import Image from "next/image";
import Link from "next/link";

import { useId } from "react";
import { Project } from "../../../types";

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
            {/* <div className="project__more">Details</div> */}
            <Link href={`/projects/${title}`} className="project__more" >Details</Link>
            <div>
                <h5 className="project__title">{title}</h5>
                <h6 className="project__subtitle">{description}</h6>
                <h6 className="project__features-header">Features: </h6>
                <ul className="project__features-list features-list">
                    {sortedFeatures.map(feature => (
                        <li className="features-list__item" key={`${ID}--${feature}`}>
                            {feature}
                        </li>
                    ))}
                </ul>
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
