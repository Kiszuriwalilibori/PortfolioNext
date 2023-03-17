import { Project } from "../../types";

export default function createFeaturesList(data: Project[]) {
    const temp: string[] = [];
    data.forEach(item => item.features && temp.push(...item.features));
    return Array.from(new Set(temp)).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
}
