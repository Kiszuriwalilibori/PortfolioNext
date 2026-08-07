import { NotFoundContainer, NotFoundTitle } from "./style";

interface Props {
    message: string;
}
export function NotFound({ message }: Props) {
    return (
        <NotFoundContainer>
            {" "}
            <NotFoundTitle variant="h1">{message}</NotFoundTitle>{" "}
        </NotFoundContainer>
    );
}
export default NotFound;
