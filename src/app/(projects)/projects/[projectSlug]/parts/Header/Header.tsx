import { Project } from "@/types";

import { HeaderSubtitle } from "./Header.Subtitle";
import { HeaderTitle } from "./Header.Title";
import { projectContainerSx, projectHeroSx } from "./ProjectHero.styles";
import Box from "@mui/material/Box";

interface Props {
    title: Project["title"];
    description: Project["description"];
}

export const Header = (props: Props) => {
    const { title, description } = props;
    return (
        <Box
            component="header"
            className={`top-section top-section--${title.toLowerCase().split(" ").join("-")}`}
            sx={{
                position: "relative",
                zIndex: 1,
                minHeight: 640,
                backgroundColor: "secondary.main",
                [`@media (min-width: 1500px)`]: {
                    maxWidth: 1500,
                    margin: "0 auto",
                },
            }}
        >
            {/* <header className={`top-section top-section--${title.toLowerCase().split(" ").join("-")}`}> */}
            <div className="project-screen"></div>
            <Box sx={projectContainerSx}>
                <Box sx={projectHeroSx}>
                    <HeaderTitle>{title}</HeaderTitle>
                    <HeaderSubtitle>{description}</HeaderSubtitle>
                </Box>
            </Box>
            {/* </header> */}
        </Box>
    );
};

export default Header;
