"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { VerticalTimelineElementProps } from "react-vertical-timeline-component";

export const TimelineElement = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>,
    VerticalTimelineElementProps: VerticalTimelineElementProps
) => {
    return <VerticalTimelineElement {...VerticalTimelineElementProps}>{children}</VerticalTimelineElement>;
};

export default TimelineElement;
