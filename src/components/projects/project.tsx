import { useId } from "react";
import { Project } from "../../../types";
interface Props {
    projectData: Project;
}

const Project = (props: Props) => {
    const {
        projectData: { description, title, features },
    } = props;
    const ID = useId();
    return (
        <article className="project">
            <h5 className="project__title">{title}</h5>
            <h6 className="project__subtitle">{description}</h6>
            <h6 className="project__features-header">Features: </h6>
            <ul className="project__features-list features-list">
                {features.map(feature => (
                    <li className="features-list__item" key={`${ID}--${feature}`}>
                        {feature}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Project;
