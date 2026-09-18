import Typography from "@mui/material/Typography";

import { headerTitleSx } from "./Header.Title.style";

interface Props {
    children: React.ReactNode;
}

export const HeaderTitle = ({ children }: Props) => (
    <Typography component="h1" sx={headerTitleSx}>
        {children}
    </Typography>
);
