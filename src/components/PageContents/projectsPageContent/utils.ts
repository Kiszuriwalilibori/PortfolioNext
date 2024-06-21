import { ProjectType } from "types";

export function sortProjects(a: ProjectType, b: ProjectType) {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
}
