"use client";
import React from "react";

import { useState, useEffect, createContext, useContext, FC, ReactNode } from "react";

import throttle from "lodash/throttle";
import { Sizes } from "@/models/viewports";

interface viewportContextInterface {
    viewportSize: Sizes;
}

const ViewportContext = createContext({} as viewportContextInterface);

const getDeviceConfig = (width: number): Sizes => {
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
    const [viewportSize, setViewportSize] = useState("" as Sizes);

    useEffect(() => {
        const calcInnerWidth = throttle(function () {
            setViewportSize(getDeviceConfig(window.innerWidth));
        }, 200);

        window.addEventListener("resize", calcInnerWidth);

        calcInnerWidth();
        return () => {
            window.removeEventListener("resize", calcInnerWidth);
        };
    }, []);

    return (
        <ViewportContext
            value={{
                viewportSize: viewportSize,
            }}
        >
            {children}
        </ViewportContext>
    );
};

const useBreakpoints = () => {
    const { viewportSize } = useContext(ViewportContext);
    return { viewportSize };
};

export { ViewportProvider, useBreakpoints };
