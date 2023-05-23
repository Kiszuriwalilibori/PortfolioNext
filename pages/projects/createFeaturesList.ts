import { Project } from "../../types";

export default function createFeaturesList(data: Project[]) {
    const temp: string[] = [];
    console.log("data from createfeaturelists", data);
    if (data && data.length) {
        data.forEach(item => item.features && temp.push(...item.features));
        return Array.from(new Set(temp)).sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
    } else {
        return [];
    }
}
