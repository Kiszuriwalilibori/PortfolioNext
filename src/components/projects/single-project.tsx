import React from "react";
import { Project } from "../../../types";
import Contact from "../contact";
import Icons from "../contact/icons";
import { useId } from "react";

interface Props {
    data: {
        data: Project;
    };
}

function SingleProjectPage(props: any) {
    const { title, description, story, live, github, longDescription, features } = props.data.data;
    console.log(props.data.data.features);
    const ID = useId();
    return (
        <div className="single-project">
            <section className={`top-section top-section--${title.toLowerCase().split(" ").join("-")}`}>
                <div className="project-screen"></div>
                <div className="project-container">
                    <div className="header">
                        <h1 className="header__title">{title}</h1>
                        <h2 className="header__subtitle">{description}</h2>
                    </div>
                </div>
            </section>
            <section className="bottom-section">
                <div className="bottom-section__column links">
                    <h2>Links</h2>
                    <a href={live} className="link" rel="noopener">
                        {Icons.live}
                        <span>See project live</span>
                    </a>

                    <a href={github} className="link" rel="noopener">
                        {Icons.github}
                        <span>Go to GitHub repository</span>
                    </a>
                </div>
                <div className="bottom-section__column story">
                    <h2>Story</h2>
                    {story}
                </div>
                <div className="bottom-section__column tech">
                    <h2>Tech</h2>
                    {longDescription &&
                        longDescription.map((item: string) => {
                            return <p key={`${ID}-${item}`}>{item}</p>;
                        })}
                    <h2>Features</h2>
                    {features &&
                        features.map((item: string) => {
                            return <span className="project-feature" key={`${ID}-${item}`}>{`${item}  `}</span>;
                        })}
                </div>
            </section>
        </div>
    );
}

export default SingleProjectPage;
