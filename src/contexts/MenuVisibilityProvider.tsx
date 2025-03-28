"use client";

import useBoolean from "@/hooks/useBoolean";
import React, { createContext, use } from "react";

interface Props {
    isMenuVisible: boolean;
    toggleMenuVisibility: () => void;
    hideMenu: () => void;
    showMenu: () => void;
}

const MenuVisibilityContext = createContext<Props>({} as Props);

const MenuVisibilityContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuVisible, showMenu, hideMenu, toggleMenuVisibility] = useBoolean(false);
    return <MenuVisibilityContext value={{ isMenuVisible, showMenu, hideMenu, toggleMenuVisibility }}>{children}</MenuVisibilityContext>;
};

function useMenuVisibilityContext() {
    const context = use(MenuVisibilityContext);
    if (context === undefined) {
        throw new Error("it must be used within a FiltersVisibilityContextProvider");
    }
    return context;
}

export { MenuVisibilityContextProvider, MenuVisibilityContext, useMenuVisibilityContext };
