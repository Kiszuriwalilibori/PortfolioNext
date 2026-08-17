import { Typography } from "@mui/material";

import { ProjectCategoryIndicator, ProjectCategoryLegend as ProjectCategoryLegendContainer, ProjectCategoryLegendItem } from "../page.styles";

export function ProjectCategoryLegend() {
    return (
        <ProjectCategoryLegendContainer>
            <ProjectCategoryLegendItem>
                <ProjectCategoryIndicator
                    aria-hidden="true"
                    sx={{
                        backgroundColor: "success.main",
                    }}
                />

                <Typography>Primary, refined works with long commit history and usually a lot of features</Typography>
            </ProjectCategoryLegendItem>

            <ProjectCategoryLegendItem>
                <ProjectCategoryIndicator
                    aria-hidden="true"
                    sx={{
                        backgroundColor: "warning.main",
                    }}
                />

                <Typography>Better leave unseen... at least code. Old, not maintained and not modernised works</Typography>
            </ProjectCategoryLegendItem>
        </ProjectCategoryLegendContainer>
    );
}
export default ProjectCategoryLegend;
