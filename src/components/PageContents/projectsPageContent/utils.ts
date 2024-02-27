import { Project } from "types";

export function sortProjects(a: Project, b: Project) {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
}
