import React from "react";
import { Project } from "../../../types";
import Contact from "../contact";
import Icons from "../contact/icons";

interface Props {
    data: {
        data: Project;
    };
}

function SingleProjectPage(props: Props) {
    const { title, description, story, live, github } = props.data.data;

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
                    {" "}
                    <h2>Tech</h2>
                </div>
            </section>
        </div>
    );
}

export default SingleProjectPage;
