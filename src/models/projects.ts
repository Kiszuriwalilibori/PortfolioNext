import { ProjectType } from "@/types";

export abstract class ProjectUtils {
    static sortProjectsByTitle(a: ProjectType, b: ProjectType) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }

    static sortFeatures(a: string, b: string) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
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
    static getKey(ID: string, item: ProjectType) {
        return `${ID}--${item.title}`;
    }
    static getSlideKey(ID: string, slide: string) {
        return `${ID}--${slide}`;
    }
    static getFeatureKey(ID: string, feature: string) {
        return `${ID}--${feature}`;
    }
}
