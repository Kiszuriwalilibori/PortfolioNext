import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";
import { useState, useCallback } from "react";

import { Project } from "../../types";

function getVisibleProjects(data: Project[], filters: string[], props: string[]) {
    if (isEmpty(filters)) return data;
    const result: Project[] = [];
    data.forEach(project => {
        if (filters.every(filter => project.features.includes(filter))) result.push(project);
    });

    return result;
}

const useGetProjects = (featuresList: string[], data: Project[]) => {
    const [activeFeatures, setActiveFeatures] = useState([] as string[]);

    const changeHandler = useCallback(
        (ary: string[]) => {
            if (ary.length) {
                setActiveFeatures(ary);
            } else {
                setActiveFeatures([]);
            }
        },
        [featuresList]
    );

    const visibleProjects = getVisibleProjects(data, activeFeatures, featuresList);

    return { visibleProjects, changeHandler };
};

export default useGetProjects;
