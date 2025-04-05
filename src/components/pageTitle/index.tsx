"use client";

import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
interface Props {
    title: string;
    isWhite?: boolean;
}

export const PageTitle = (props: Props) => {
    const theme = useTheme();
    const { title, isWhite = false } = props;
    const style = isWhite ? { color: theme.palette.common.white } : {};
    return (
        <Typography variant="pageTitle" component="h1" sx={{ ...style }}>
            {title}
        </Typography>
    );
};

export default PageTitle;
