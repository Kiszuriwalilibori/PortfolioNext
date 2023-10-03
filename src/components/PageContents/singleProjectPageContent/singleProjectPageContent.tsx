import React from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useId } from "react";

import Icons from "../../common/icons";
import theme from "../../../themes/theme";
import { SingleProjectInformations, SingleProjectInformationsColumn } from "./styled";
import { ChipsContainer } from "../projectsPageContent/styled";
import { Project } from "../../../../types";

interface Props {
    data: {
        data: Project;
    };
}

const StackDivider = () => (
    <Divider
        orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"}
        flexItem
        sx={{ backgroundColor: theme.palette.primary.light }}
    />
);

function SingleProjectPageContent(props: Props) {
    const { title, description, story, live, github, longDescription, features } = props.data.data; //todo wygląda podejrzanie to podwójne data
    const ID = useId();

    return (
        <>
            <header className={`top-section top-section--${title.toLowerCase().split(" ").join("-")}`}>
                <div className="project-screen"></div>
                <div className="project-container">
                    <div className="header">
                        <h1 className="header__title">{title}</h1>
                        <h2 className="header__subtitle">{description}</h2>
                    </div>
                </div>
            </header>

            <SingleProjectInformations direction={{ md: "row" }} divider={<StackDivider />}>
                <SingleProjectInformationsColumn>
                    <h2>Links</h2>
                    <a href={live} style={{ display: "block" }} rel="noopener">
                        {Icons.live}
                        <Typography variant="singleProjectLink">See project live</Typography>
                    </a>

                    <a href={github} style={{ display: "block" }} rel="noopener">
                        {Icons.github}
                        <Typography variant="singleProjectLink">Go to GitHub repository</Typography>
                    </a>
                </SingleProjectInformationsColumn>
                <SingleProjectInformationsColumn>
                    <h2>Story</h2>
                    {story}
                </SingleProjectInformationsColumn>
                <SingleProjectInformationsColumn>
                    <h2>Tech</h2>
                    {longDescription &&
                        longDescription.map((item: string) => {
                            return <p key={`${ID}-${item}`}>{item}</p>;
                        })}
                    <h2>Features</h2>
                    <ChipsContainer>
                        {features &&
                            features.map((item: string) => {
                                return <Chip key={`${ID}-${item}`} label={`${item}`} variant="outlined" />;
                            })}
                    </ChipsContainer>
                </SingleProjectInformationsColumn>
            </SingleProjectInformations>
        </>
    );
}

export default SingleProjectPageContent;
