import React from "react";
import { Project } from "../../../types";

// interface Props {
//     data: Project;
// }

const SingleProjectPage = (props: any) => {
    const { title, description } = props.data.data;

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
                <div>Test</div>
            </section>
        </div>
    );
};

export default SingleProjectPage;
