import Box from "@mui/material/Box";
import Link from "next/link";

import { MoreButtonStyled } from "./styled";
import { PageUtils } from "@/models/pages";

import Icons from "@icons";
import { Project } from "@/types";

interface Props {
    slug: Project["slug"];
    title: Project["title"];
}

export default function ButtonMore(props: Props) {
    const { slug, title } = props;
    return (
        <MoreButtonStyled variant="contained" color="primary" LinkComponent={Link} href={PageUtils.projectPage(slug)} endIcon={Icons["send"]} aria-label={`Link to ${title} project`} sx={{ marginTop: "auto" }}>
            <Box component="span">Details</Box>
        </MoreButtonStyled>
    );
}
