import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
    message: string;
}

const boxSx: SxProps = {
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const typographySx: SxProps<Theme> = theme => ({
    color: theme.palette.error.main,
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
});

export function NotFound({ message }: Props) {
    return (
        <Box sx={boxSx}>
            <Typography variant="h1" sx={typographySx}>
                {message}
            </Typography>
        </Box>
    );
}

export default NotFound;
