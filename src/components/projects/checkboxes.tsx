import { Box } from "@mui/material";
import { useId, useState } from "react";

import { Checkbox, CheckboxGroup } from "rsuite";

interface Props {
    values: string[];
    handleChange: Function;
}
export default function Checkboxes(props: Props) {
    const ID = useId();
    const { values, handleChange } = props;
    const [chkValue, setChkValue] = useState([] as string[]);

    const checkboxesArray = values.map(item => {
        return (
            <Checkbox key={item} value={item} className="checkbox">
                {item}
            </Checkbox>
        );
    });

    return (
        <Box sx={{ marginBottom: "8px" }}>
            <h4>Select projects by features</h4>
            <div style={{ marginTop: 20, width: 240 }}>
                <CheckboxGroup
                    className="checkbox-group"
                    inline
                    name="checkboxList"
                    value={chkValue}
                    onChange={value => {
                        setChkValue(value as string[]);
                        handleChange(value as string[]);
                    }}
                >
                    {checkboxesArray}
                </CheckboxGroup>
            </div>
        </Box>
    );
}
