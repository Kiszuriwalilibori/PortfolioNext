import { useId } from "react";

import { ChipsContainer } from "@/app/(main)/projects/styled";

import Chip from "@mui/material/Chip";

interface Props {
    features: string[];
}
export function Features(props: Props) {
    const { features } = props;
    const ID = useId();
    if (!features || !features.length) {
        return null;
    }
    return (
        <>
            <h2>Features</h2>
            <ChipsContainer id={"Features"}>
                {features &&
                    features.map((item: string) => {
                        return <Chip key={`${ID}-${item}`} label={`${item}`} variant="outlined" />;
                    })}
            </ChipsContainer>
        </>
    );
}

export default Features;
