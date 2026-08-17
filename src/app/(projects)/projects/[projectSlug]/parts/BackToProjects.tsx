import { navigationButtonSx, navigationLabelSx } from "@/components/navigation/navigation.styles";
import { Button, Theme, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import type { SystemStyleObject } from "@mui/system";

const backToProjectsSx: SystemStyleObject<Theme> = {
    ...navigationButtonSx(false),
    position: "fixed",
    top: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
};

function BackToProjects() {
    return (
        <Button component={Link} href="/projects" aria-label="Back to Projects" sx={backToProjectsSx} disableRipple>
            <Image src="/icons/back.svg" alt="" width={40} height={40} />

            <Typography component="span" sx={navigationLabelSx(false)}>
                Back to Projects
            </Typography>
        </Button>
    );
}

export default BackToProjects;
