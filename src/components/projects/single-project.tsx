import React from "react";
import { Project } from "../../../types";

// interface Props {
//     data: Project;
// }

const SingleProjectPage = (props: any) => {
    const { title } = props.data.data;

    return (
        <div className="single-project">
            <section className={`top-section top-section--${title.toLowerCase().split(" ").join("-")}`}>
                <div className="project-screen"></div>
            </section>
        </div>
    );
};

export default SingleProjectPage;
