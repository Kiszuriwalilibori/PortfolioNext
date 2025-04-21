import { ProjectType } from "@/types";

export abstract class ProjectUtils {
    static sort(a: ProjectType, b: ProjectType) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
    static filterByCategory(projects: ProjectType[], category: string) {
        return projects.filter(item => item.category === category);
    }

    static getFeatures(data: ProjectType[]) {
        const temp: ProjectType["features"] = [];

        if (data && data.length) {
            data.forEach(item => item.features && temp.push(...item.features));
            return Array.from(new Set(temp)).sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
        } else {
            return [];
        }
    }
}
