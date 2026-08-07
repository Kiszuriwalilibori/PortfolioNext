import Icons from "@icons";
import { NextButton } from "../styled";

interface Props {
    target: string;
}
export const ToNext = (props: Props) => {
    const { target } = props;

    return (
        <NextButton id="Next Button" href={target} aria-label="Go to next project">
            {Icons.forward}
        </NextButton>
    );
};

export default ToNext;
