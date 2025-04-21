import { ProjectType } from "types";
import { Checkbox, LabelledCheckbox } from "./styled";

interface Props {
    features: ProjectType["features"];
    handleCheck: (arg0: string) => void;
}

export const LabelledFeatures = (props: Props) => {
    const { features, handleCheck } = props;
    return (
        <>
            {features.map((feature: string) => {
                return (
                    <LabelledCheckbox
                        key={feature}
                        control={<Checkbox disableRipple={true} onChange={() => handleCheck(feature)} />}
                        label={feature}
                    />
                );
            })}
        </>
    );
};

export default LabelledFeatures;
