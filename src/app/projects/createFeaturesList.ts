import { ProjectType } from "@/types";

export default function createFeaturesList(data: ProjectType[]) {
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
