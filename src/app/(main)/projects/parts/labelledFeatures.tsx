import { Project } from "@/types";
import { Checkbox, LabelledCheckbox } from "./styled";

interface Props {
    features: Project["features"];
    handleCheck: (arg0: string) => void;
}

export const LabelledFeatures = (props: Props) => {
    const { features, handleCheck } = props;
    return (
    <div role="group" aria-label="Project features selection">
        {features.map((feature: string) => {
            return <LabelledCheckbox key={feature} control={<Checkbox disableRipple={true} onChange={() => handleCheck(feature)} />} label={feature} />;
        })}
    </div>
);
};

export default LabelledFeatures;
