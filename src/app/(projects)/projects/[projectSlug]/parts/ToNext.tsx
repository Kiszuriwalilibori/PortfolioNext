import Icons from "@/components/common/icons";
import { NextButton } from "./styled";

interface Props {
    target: string;
}
export const ToNext = (props: Props) => {
    const { target } = props;

    return <NextButton href={target}>{Icons.forward}</NextButton>;
};

export default ToNext;
