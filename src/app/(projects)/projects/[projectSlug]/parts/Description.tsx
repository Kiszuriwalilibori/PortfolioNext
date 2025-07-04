import { Project } from "@/types";
import { useId } from "react";

interface Props {
    longDescription: Project["description"][];
}
export function Description(props: Props) {
    const ID = useId();
    const { longDescription } = props;

    return (
        <>
            {longDescription &&
                longDescription.map((item: string) => {
                    return <p key={`${ID}-${item}`}>{item}</p>;
                })}
        </>
    );
}

export default Description;
