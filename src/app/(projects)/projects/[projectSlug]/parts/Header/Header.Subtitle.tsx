import Typography from "@mui/material/Typography";

import { headerSubtitleSx } from "./Header.Subtitle.style";

interface Props {
    children: React.ReactNode;
}

export const HeaderSubtitle = ({ children }: Props) => (
    <Typography component="h2" sx={headerSubtitleSx}>
        {children}
    </Typography>
);
