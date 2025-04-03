export type Sizes = "mobile" | "phablet" | "tablet" | "desktop" | "desktopHD";
export const mobileViewports = new Set<Sizes>(["mobile", "phablet"]);
export const nonMobileViewports = new Set<Sizes>(["tablet", "desktop", "desktopHD"]);
