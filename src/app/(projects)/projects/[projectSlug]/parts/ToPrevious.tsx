import Icons from "@/components/common/icons";
import { PreviousButton } from "../styled";

interface Props {
    target: string;
}
export const ToPrevious = (props: Props) => {
    const { target } = props;

    return (
        <PreviousButton id="Previous Button" href={target} aria-label="Go to previous project">
            {Icons.backward}
        </PreviousButton>
    );
};

export default ToPrevious;
