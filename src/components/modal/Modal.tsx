import Icons from "@icons";
import { Actions, Content, CloseButton, Dialog, Subtitle, Title, TitleText } from "./Modal.styles";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
    content?: React.ReactNode;
}

export default function Modal(props: ModalProps) {
    const { isOpen, onClose, title, actions, content, subtitle } = props;

    return (
    <Dialog
        open={isOpen}
        keepMounted
        onClose={onClose}
        disableScrollLock
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={subtitle ? "modal-subtitle" : undefined}
    >
        <Title>
            <TitleText id="modal-title">{title}</TitleText>
            {subtitle && <Subtitle id="modal-subtitle">{subtitle}</Subtitle>}
            <CloseButton aria-label="Close dialog" onClick={onClose}>
                {Icons.close}
            </CloseButton>
        </Title>
        <Content>{content}</Content>
        <Actions>{actions}</Actions>
    </Dialog>
);
}
