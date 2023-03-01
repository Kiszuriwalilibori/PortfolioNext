import { memo, useCallback, useState } from "react";
import { Project } from "../../../types";
import SingleProject from "./project";
import Checkboxes from "./checkboxes";
import { isEqual } from "lodash";

function getVisibleProjects(data: Project[], filters: string[], props: string[]) {
    console.log("filters", filters);
    if (isEqual(filters, props)) return data;
    const result: Project[] = [];
    data.forEach(project => {
        if (filters.every(filter => project.features.includes(filter))) result.push(project);
    });

    return result;
}

interface Props {
    data: Project[];
    featuresList: string[];
}
const Content = (props: Props) => {
    const { data, featuresList } = props;
    const [activeFeatures, setActiveFeatures] = useState(featuresList);

    const handleChange = useCallback(
        (ary: string[]) => {
            if (ary.length) {
                setActiveFeatures(ary);
            } else {
                setActiveFeatures(featuresList);
            }
        },
        [featuresList]
    );

    console.log("activefeatures", activeFeatures);

    const visibleProjects = getVisibleProjects(data, activeFeatures, featuresList);
    console.log(visibleProjects);
    return (
        <article className="wrapper">
            <Checkboxes values={featuresList} handleChange={handleChange} />
        </article>
    );
};

export default memo(Content);
