import Typography from "@mui/material/Typography";
import Icons from "@icons";
import React from "react";

interface Props {
    live: string;
    github: string;
}

export const Links = (props: Props) => {
    const { live, github } = props;
    return (
        <>
            <h2>Links</h2>
            <a
                href={live}
                rel="noopener"
                className="project-link"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    minHeight: "48px",
                }}
            >
                {React.cloneElement(Icons.live, {
                    "aria-hidden": true,
                })}
                <Typography variant="singleProjectLink">See project live</Typography>
            </a>
            <a
                href={github}
                rel="noopener"
                className="project-link"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    minHeight: "48px",
                }}
            >
                {React.cloneElement(Icons.github, {
                    "aria-hidden": true,
                })}
                <Typography variant="singleProjectLink">Go to GitHub repository</Typography>
            </a>
        </>
    );
};

export default Links;
