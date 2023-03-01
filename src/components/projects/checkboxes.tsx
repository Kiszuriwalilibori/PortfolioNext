import { useId, useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Checkbox, CheckboxGroup } from "rsuite";

interface Props {
    values: string[];
    handleChange: Function;
}
export default function Checkboxes(props: Props) {
    const ID = useId();
    const { values, handleChange } = props;
    const [chkValue, setChkValue] = useState([] as string[]);

    const checkboxAry = values.map(item => {
        return (
            <Checkbox key={item} value={item}>
                {item}
            </Checkbox>
        );
    });

    return (
        <center>
            <div>
                <h4>Select projects by features</h4>

                <div style={{ marginTop: 20, width: 240 }}>
                    <CheckboxGroup
                        inline
                        name="checkboxList"
                        value={chkValue}
                        onChange={value => {
                            setChkValue(value as string[]);
                            handleChange(value as string[]);
                        }}
                    >
                        {checkboxAry}
                    </CheckboxGroup>
                </div>
            </div>
        </center>
    );
}
