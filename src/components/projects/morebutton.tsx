import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import { MoreButtonContainer, MoreButtonStyled } from "../../../styles/styled";

interface Props {
    title: string;
}

export default function MoreButton(props: Props) {
    const { title } = props;
    return (
        <MoreButtonContainer>
            <MoreButtonStyled variant="contained" color="primary">
                <Link href={`/projects/${title}`}>
                    <Box component="span">Details</Box>
                </Link>
            </MoreButtonStyled>
        </MoreButtonContainer>
    );
}
