import { Project } from "@/types";

import { HeaderSubtitle } from "./Header.Subtitle";
import { HeaderTitle } from "./Header.Title";
import { projectHeroSx } from "./ProjectHero.styles";
import Box from "@mui/material/Box";

interface Props {
    title: Project["title"];
    description: Project["description"];
}

export const Header = (props: Props) => {
    const { title, description } = props;
    return (
        <header className={`top-section top-section--${title.toLowerCase().split(" ").join("-")}`}>
            <div className="project-screen"></div>
            <div className="project-container">
                <Box sx={projectHeroSx}>
                    <HeaderTitle>{title}</HeaderTitle>
                    <HeaderSubtitle>{description}</HeaderSubtitle>
                </Box>
            </div>
        </header>
    );
};

export default Header;
