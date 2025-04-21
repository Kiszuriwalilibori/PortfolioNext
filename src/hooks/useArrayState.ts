"use client";

import { useCallback, useState } from "react";

export const useSwitchableArrayState = <T>() => {
    const [items, setItems] = useState([] as T[]);

    const handleSwitch = useCallback(
        (item: T) => {
            const temp = [...items];
            if (temp.includes(item)) {
                temp.splice(temp.indexOf(item), 1);
            } else {
                temp.push(item);
            }
            setItems(temp);
        },
        [items]
    );
    return { handleSwitch, items };
};

export default useSwitchableArrayState;
