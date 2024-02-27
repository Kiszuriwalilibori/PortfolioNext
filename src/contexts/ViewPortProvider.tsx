import throttle from "lodash/throttle";

import { useState, useEffect, createContext, useContext, FC, ReactNode } from "react";

import { DesktopSizes } from "types";

interface viewportContextInterface {
    desktopSize: DesktopSizes;
}

const viewportContext = createContext({} as viewportContextInterface);

const getDeviceConfig = (width: number): DesktopSizes => {
    if (width < 550) {
        return "mobile";
    } else if (width >= 550 && width < 768) {
        return "phablet";
    } else if (width >= 768 && width < 1000) {
        return "tablet";
    } else if (width >= 1000 && width < 1200) {
        return "desktop";
    } else {
        return "desktopHD";
    }
};

const ViewportProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [desktopSize, setDesktopSize] = useState(undefined as unknown as DesktopSizes);

    useEffect(() => {
        const calcInnerWidth = throttle(function () {
            setDesktopSize(getDeviceConfig(window.innerWidth));
        }, 200);

        window.addEventListener("resize", calcInnerWidth);

        calcInnerWidth();
        return () => {
            window.removeEventListener("resize", calcInnerWidth);
        };
    }, []);

    return (
        <viewportContext.Provider
            value={{
                desktopSize: desktopSize,
            }}
        >
            {children}
        </viewportContext.Provider>
    );
};

const useBreakpoints = () => {
    const { desktopSize } = useContext(viewportContext);
    return { desktopSize };
};

export { ViewportProvider, useBreakpoints };
