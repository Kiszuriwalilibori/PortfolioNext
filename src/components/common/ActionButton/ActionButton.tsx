import { Button, Typography } from "@mui/material";
import Image from "next/image";

import { actionButtonSx, actionButtonLabelSx } from "./ActionButton.styles";

export type ActionButtonVariant = "cancel" | "remove" | "save" | "logout";

interface Props {
    variant: ActionButtonVariant;
    icon: string;
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const ActionButton = ({ variant, icon, label, onClick, disabled = false }: Props) => {
    return (
        <Button type="button" onClick={onClick} disabled={disabled} aria-label={label} disableRipple sx={actionButtonSx(variant)}>
            <Image src={icon} alt="" width={40} height={40} aria-hidden="true" />

            <Typography component="span" sx={actionButtonLabelSx}>
                {label}
            </Typography>
        </Button>
    );
};

export default ActionButton;
