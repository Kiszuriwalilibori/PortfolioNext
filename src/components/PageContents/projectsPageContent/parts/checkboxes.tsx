import { Box } from "@mui/material";
import { useId, useState } from "react";

import { Checkbox, CheckboxGroup } from "rsuite";

interface Props {
    features: string[];
    handleChange: (ary: string[]) => void;
}
export function Checkboxes(props: Props) {
    const ID = useId();
    const { features, handleChange } = props;
    const [checked, setChecked] = useState([] as string[]);

    const checkboxesArray = features.map(feature => {
        return (
            <Checkbox key={feature} value={feature} className="checkbox">
                {feature}
            </Checkbox>
        );
    });

    return (
        <Box sx={{ marginBottom: "8px" }}>
            <h2>Select projects by features</h2>
            <div style={{ marginTop: 20, width: 240 }}>
                <CheckboxGroup
                    className="checkbox-group"
                    aria-label="group of feature checkboxes"
                    inline
                    name="checkboxList"
                    value={checked}
                    onChange={value => {
                        setChecked(value as string[]);
                        handleChange(value as string[]);
                    }}
                >
                    {checkboxesArray}
                </CheckboxGroup>
            </div>
        </Box>
    );
}

export default Checkboxes;
