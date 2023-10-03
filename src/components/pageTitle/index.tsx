import Typography from "@mui/material/Typography";
import theme from "../../themes/theme";

interface Props {
    title: string;
    isWhite?: boolean;
}

export const PageTitle = (props: Props) => {
    const { title, isWhite = false } = props;
    const style = isWhite ? { color: theme.palette.common.white } : {};
    return (
        <Typography variant="pageTitle" component="h1" sx={{ ...style }}>
            {title}
        </Typography>
    );
};

export default PageTitle;
