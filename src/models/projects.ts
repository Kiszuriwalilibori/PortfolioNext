import { projects } from "@/data/projects";
import { ProjectType } from "@/types";

export abstract class ProjectUtils {
    static sort(a: ProjectType, b: ProjectType) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
    static filterByCategory(projects: ProjectType[], category: string) {
        return projects.filter(item => item.category === category);
    }
}
