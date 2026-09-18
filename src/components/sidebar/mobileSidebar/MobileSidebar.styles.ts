export const contactsSx = {
    position: "absolute",
    left: "50%",
    bottom: 10,
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    listStyle: "none",
};

export const contactItemSx = {
    margin: 0,
    padding: 0,
};

export const contactLinkSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 44,
    minHeight: 44,

    "& svg": {
        height: "2em",
        color: "primary.dark",
        margin: "0 1em",
    },
};
