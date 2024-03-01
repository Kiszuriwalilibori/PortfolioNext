import { useId } from "react";

interface Props {
    longDescription: string[];
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
