// NavLink.tsx
import { Button, ListItem, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

import { Pages, PageUtils } from "@/models/pages";

import { navigationButtonSx, navigationItemSx, navigationLabelSx } from "./navigation.styles";

interface Props {
    page: Pages;
    clickHandler: () => void;
    currentPathName: string;
}

function NavigationLink({ page, clickHandler, currentPathName }: Props) {
    const isActive = currentPathName === PageUtils.pageToHref(page) || currentPathName.startsWith(PageUtils.pageToHref(page));

    return (
        <ListItem id="List Item" disablePadding sx={navigationItemSx}>
            <Button component={Link} href={PageUtils.pageToHref(page)} rel="noopener" onClick={clickHandler} aria-label={`Navigate to ${page} page`} sx={navigationButtonSx(isActive)} disableRipple>
                <Image src={PageUtils.pageToIconSrc(page)} alt={`Navigate to ${page} page`} width={40} height={40} />
                <Typography component="span" sx={navigationLabelSx(isActive)}>
                    {page}
                </Typography>
            </Button>
        </ListItem>
    );
}

export default NavigationLink;
