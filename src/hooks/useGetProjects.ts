"use client";

import isEmpty from "lodash/isEmpty";

import { useState, useCallback } from "react";
import { ProjectType } from "@/types";

function getVisibleProjects(data: ProjectType[], filters: string[], props: string[]) {
    if (isEmpty(filters)) return data;
    const result: ProjectType[] = [];
    data.forEach(project => {
        if (filters.every(filter => project.features.includes(filter))) result.push(project);
    });

    return result;
}

const useGetProjects = (featuresList: string[], data: ProjectType[]) => {
    const [activeFeatures, setActiveFeatures] = useState([] as string[]);

    const changeHandler = useCallback((ary: string[]) => {
        if (ary.length) {
            setActiveFeatures(ary);
        } else {
            setActiveFeatures([]);
        }
    }, []);

    const visibleProjects = getVisibleProjects(data, activeFeatures, featuresList);

    const titles = visibleProjects.map(project => {
        return project.title;
    });

    return { visibleProjects, changeHandler, titles };
};

export default useGetProjects;

// todo: podejrzanie skomplikowane. Po co filtrować w tym miejscu
