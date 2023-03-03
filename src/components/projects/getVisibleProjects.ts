import isEqual from "lodash/isEqual";

import { Project } from "../../../types";

export default function getVisibleProjects(data: Project[], filters: string[], props: string[]) {
    if (isEqual(filters, props)) return data;
    const result: Project[] = [];
    data.forEach(project => {
        if (filters.every(filter => project.features.includes(filter))) result.push(project);
    });

    return result;
}
