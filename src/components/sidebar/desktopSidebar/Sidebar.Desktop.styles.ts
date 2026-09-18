import { design } from "@/themes/design";

export const sidebarSx = {
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    zIndex: 2,
    width: "25%",
    minWidth: 190,
    fontSize: "14px",
    color: "#fff",
    textAlign: "left",
    backgroundColor: design.primary.light,

    "@media (min-width: 768px)": {
        display: "flex",
    },

    "@media (min-width: 1500px)": {
        maxWidth: 375,
        marginLeft: "calc((100vw - 1500px) / 2)",
    },
};

export const authorSx = {
    textAlign: "center",
    color: "#fff",
    padding: 2.5,
    paddingTop: 3.75,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

export const descriptionSx = {
    fontSize: "12px",
    fontWeight: 400,
    letterSpacing: "0.8px",
    textTransform: "uppercase",
};

export const contactsSx = {
    display: "flex",
    justifyContent: "center",
    padding: 1.25,
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
};

export const contactIconSx = {
    height: "1.5em",
    color: "common.white",
    margin: "0 1em",
};
