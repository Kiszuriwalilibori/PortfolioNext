export const imageContainerSx = {
    display: "block",
    width: 130,
    height: 130,
    marginBottom: 2,

    "@media (min-width: 768px) and (max-width: 990px)": {
        width: 140,
        height: 140,
    },

    "@media (min-width: 991px)": {
        width: 150,
        height: 150,
    },

    "& img": {
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        opacity: 1,
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.12), " + "0 2px 2px rgba(0, 0, 0, 0.12), " + "0 4px 4px rgba(0, 0, 0, 0.12), " + "0 8px 8px rgba(0, 0, 0, 0.12), " + "0 16px 16px rgba(0, 0, 0, 0.12)",
    },
};
