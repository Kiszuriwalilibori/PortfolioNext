"use client";

import isEmpty from "lodash/isEmpty";

import { useState, useCallback } from "react";
import { Project } from "@/types";

function getVisibleProjects(data: Project[], filters: string[]) {
    if (isEmpty(filters)) return data;
    const result: Project[] = [];
    data.forEach(project => {
        if (filters.every(filter => project.features.includes(filter))) result.push(project);
    });

    return result;
}

const useGetProjects = (featuresList: string[], data: Project[]) => {
    const [activeFeatures, setActiveFeatures] = useState([] as string[]);

    const changeHandler = useCallback((ary: string[]) => {
        if (ary.length) {
            setActiveFeatures(ary);
        } else {
            setActiveFeatures([]);
        }
    }, []);

    const visibleProjects = getVisibleProjects(data, activeFeatures);

    const titles = visibleProjects.map(project => {
        return project.title;
    });

    return { visibleProjects, changeHandler, titles };
};

export default useGetProjects;
