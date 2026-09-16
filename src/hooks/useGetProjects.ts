"use client";

import isEmpty from "lodash/isEmpty";

import { useState, useCallback } from "react";
import { Project } from "@/types";

function getVisibleProjects(data: Project[], filters: string[], searchQuery: string) {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return data.filter(project => {
        const matchesFeatures = isEmpty(filters) || filters.every(filter => project.features.includes(filter));

        const matchesSearch = !normalizedQuery || project.title.toLowerCase().includes(normalizedQuery);

        return matchesFeatures && matchesSearch;
    });
}

const useGetProjects = (featuresList: string[], data: Project[]) => {
    const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    const changeHandler = useCallback((ary: string[]) => {
        setActiveFeatures(ary);
    }, []);

    const searchHandler = useCallback((value: string) => {
        setSearchQuery(value);
    }, []);

    const visibleProjects = getVisibleProjects(data, activeFeatures, searchQuery);

    return {
        visibleProjects,
        changeHandler,
        searchQuery,
        searchHandler,
    };
};

export default useGetProjects;
