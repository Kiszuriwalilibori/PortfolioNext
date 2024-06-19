import { useEffect, useId } from "react";
import { Checkbox, CheckboxGroup, FeaturesBox, FeaturesWrapper, LabelledCheckbox } from "./styled";
import { Project } from "types";

import { useArrayState } from "hooks";

interface Props {
    features: Project["features"];
    handleChange: (ary: Project["features"]) => void;
}
export function Features(props: Props) {
    const ID = useId();
    const { features, handleChange } = props;
    const { handleCheck, checkedFeatures } = useArrayState();

    useEffect(() => {
        handleChange(checkedFeatures);
    });

    const labelledFeatures = features.map(feature => {
        return (
            <LabelledCheckbox
                key={ID}
                control={<Checkbox disableRipple={true} onChange={() => handleCheck(feature)} />}
                label={feature}
            />
        );
    });

    return (
        <FeaturesWrapper>
            <h2>Select projects by features</h2>
            <FeaturesBox>
                <CheckboxGroup>{labelledFeatures}</CheckboxGroup>
            </FeaturesBox>
        </FeaturesWrapper>
    );
}

export default Features;
