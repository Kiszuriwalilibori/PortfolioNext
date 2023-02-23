import * as React from "react";

interface MenuVisibilityContextProps {
    isMenuVisible: boolean;
    toggleMenuVisibility: () => void;
}
const initialState = {
    isMenuVisible: false,
};

const MenuVisibilityContext = React.createContext<MenuVisibilityContextProps>({} as MenuVisibilityContextProps);

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
