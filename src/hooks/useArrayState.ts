import { useCallback, useState } from "react";

export const useArrayState = () => {
    const [checkedFeatures, setCheckedFeatures] = useState([] as string[]);

    const handleCheck = useCallback(
        (feature: string) => {
            const copy = [...checkedFeatures];
            if (copy.includes(feature)) {
                copy.splice(copy.indexOf(feature), 1);
            } else {
                copy.push(feature);
            }
            setCheckedFeatures(copy);
        },
        [checkedFeatures]
    );
    return { handleCheck, checkedFeatures };
};

export default useArrayState;
