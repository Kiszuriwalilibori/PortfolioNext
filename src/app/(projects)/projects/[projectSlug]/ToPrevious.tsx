import Icons from "@/components/common/icons";
import { PreviousButton } from "./styled";

interface Props {
    target: string;
}
export const ToPrevious = (props: Props) => {
    const { target } = props;

    return <PreviousButton href={target}>{Icons.backward}</PreviousButton>;
};

export default ToPrevious;
