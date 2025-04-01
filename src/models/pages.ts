export const PAGES = ["about", "skills", "projects", "career", "contact"] as const;
export type Pages = (typeof PAGES)[number];

export const pageToHref = (page: Pages) => `/${page}`;
export const pageToIconSrc = (page: Pages) => `/icons/${page}.svg`;
export const pageToImgAlt = (page: Pages) => `${page} link`;
export const pageToKey = (ID: string, page: Pages) => `${ID}-${page}`;
