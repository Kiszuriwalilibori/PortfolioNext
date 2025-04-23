import Typography from "@mui/material/Typography";
import Icons from "@/components/common/icons";

interface Props {
    live: string;
    github: string;
}

export const Links = (props: Props) => {
    const { live, github } = props;
    return (
        <>
            <h2>Links</h2>
            <a href={live} style={{ display: "block" }} rel="noopener">
                {Icons.live}
                <Typography variant="singleProjectLink">See project live</Typography>
            </a>
            <a href={github} style={{ display: "block" }} rel="noopener">
                {Icons.github}
                <Typography variant="singleProjectLink">Go to GitHub repository</Typography>
            </a>
        </>
    );
};

export default Links;
