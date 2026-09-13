import { Project } from "@/types";
import Chip from "@mui/material/Chip";
import { createFeatureChipSx } from "./LabelledFeatures.styles";
interface Props {
    features: Project["features"];
    handleCheck: (arg0: string) => void;
    selectedFeatures: Project["features"];
}

export const LabelledFeatures = (props: Props) => {
    const { features, handleCheck, selectedFeatures } = props;
    console.log("selectedFeatures", selectedFeatures);

    return (
        <div role="group" aria-label="Project features selection">
            {features.map((feature: string) => {
                return <Chip aria-pressed={selectedFeatures.includes(feature)} key={feature} label={feature} onClick={() => handleCheck(feature)} sx={createFeatureChipSx(feature, selectedFeatures)} />;
            })}
        </div>
    );
};

export default LabelledFeatures;
