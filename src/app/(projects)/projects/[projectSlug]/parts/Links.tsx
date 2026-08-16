import Typography from "@mui/material/Typography";
import { SimpleIcons } from "@icons";
import React from "react";
import Box from "@mui/material/Box";
import { projectLinkSx } from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    live: string;
    github: string;
}

export const Links = (props: Props) => {
    const { live, github } = props;
    return (
        <>
            <h2>Links</h2>
            <Box component="a" href={live} rel="noopener" sx={projectLinkSx}>
                <FontAwesomeIcon icon={SimpleIcons.live} aria-hidden="true" />
                <Typography variant="singleProjectLink">See project live</Typography>
            </Box>
            <Box component="a" href={github} rel="noopener" sx={projectLinkSx}>
                <FontAwesomeIcon icon={SimpleIcons.github} aria-hidden="true" />
                <Typography variant="singleProjectLink">Go to GitHub repository</Typography>
            </Box>
        </>
    );
};

export default Links;
