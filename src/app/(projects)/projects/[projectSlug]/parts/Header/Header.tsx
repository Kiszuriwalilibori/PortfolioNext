import { Project } from "@/types";

import { HeaderSubtitle } from "./Header.Subtitle";
import { HeaderTitle } from "./Header.Title";
import { headerSx, projectContainerSx, projectHeroSx, projectScreenSx } from "./ProjectHero.styles";
import Box from "@mui/material/Box";

interface Props {
    title: Project["title"];
    description: Project["description"];
    slug: Project["slug"];
}

export const Header = (props: Props) => {
    const { title, description, slug } = props;
    const projectImage = `/images/project_images_with_device/${slug}.webp`;

    return (
        <Box component="header" sx={headerSx}>
            <Box sx={projectScreenSx(projectImage)} />

            <Box sx={projectContainerSx}>
                <Box sx={projectHeroSx}>
                    <HeaderTitle>{title}</HeaderTitle>
                    <HeaderSubtitle>{description}</HeaderSubtitle>
                </Box>
            </Box>
        </Box>
    );
};
export default Header;
