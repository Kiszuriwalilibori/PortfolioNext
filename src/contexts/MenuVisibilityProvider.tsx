"use client";

import React, { createContext } from "react";

interface Props {
    isMenuVisible: boolean;
    toggleMenuVisibility: () => void;
    hideMenu: () => void;
}
const initialState = {
    isMenuVisible: false,
};

const MenuVisibilityContext = createContext<Props>({} as Props);

class MenuVisibilityContextProvider extends React.Component<React.PropsWithChildren> {
    state = {
        areVisible: initialState.isMenuVisible,
    };

    render() {
        return (
            <MenuVisibilityContext.Provider
                value={{
                    isMenuVisible: this.state.areVisible,
                    toggleMenuVisibility: () => this.setState({ areVisible: !this.state.areVisible }),
                    hideMenu: () => {
                        this.setState({ areVisible: false });
                    },
                }}
            >
                {this.props.children}
            </MenuVisibilityContext.Provider>
        );
    }
}

function useMenuVisibilityContext() {
    const context = React.useContext(MenuVisibilityContext);
    if (context === undefined) {
        throw new Error("it must be used within a FiltersVisibilityContextProvider");
    }
    return context;
}
export { MenuVisibilityContextProvider, MenuVisibilityContext, useMenuVisibilityContext };
