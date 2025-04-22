"use client";

import { useEffect } from "react";

import { CheckboxGroup, FeaturesBox, FeaturesWrapper } from "./styled";
import { Feature, Project } from "@/types";
import { LabelledFeatures } from "./labelledFeatures";
import { useArrayState } from "@/hooks";

interface Props {
    features: Project["features"];
    handleChange: (arg0: Project["features"]) => void;
}
export function Features(props: Props) {
    const { features, handleChange } = props;
    const { handleSwitch, items: checkedFeatures } = useArrayState<Feature>();

    useEffect(() => {
        handleChange(checkedFeatures);
    }, [checkedFeatures]);

    return (
        <FeaturesWrapper>
            <h2>Select projects by features</h2>
            <FeaturesBox>
                <CheckboxGroup>
                    <LabelledFeatures features={features} handleCheck={handleSwitch} />
                </CheckboxGroup>
            </FeaturesBox>
        </FeaturesWrapper>
    );
}

export default Features;
