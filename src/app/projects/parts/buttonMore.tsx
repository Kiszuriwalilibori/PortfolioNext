import Box from "@mui/material/Box";
import Link from "next/link";

import { MoreButtonStyled } from "./styled";
import { PageUtils } from "@/models/pages";

import Icons from "@/components/common/icons";

interface Props {
    title: string;
}

export default function ButtonMore(props: Props) {
    const { title } = props;
    return (
        <MoreButtonStyled variant="contained" color="primary" LinkComponent={Link} href={PageUtils.projectPage(title)} endIcon={Icons["send"]} aria-label={`Link to ${title} project`} sx={{ marginTop: "auto" }}>
            <Box component="span">Details</Box>
        </MoreButtonStyled>
    );
}
