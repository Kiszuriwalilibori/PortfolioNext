"use client";
import React from "react";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { VerticalTimelineElementProps } from "react-vertical-timeline-component";

export const TimelineElement = (VerticalTimelineElementProps: VerticalTimelineElementProps) => {
    return <VerticalTimelineElement {...VerticalTimelineElementProps}></VerticalTimelineElement>;
};

export default TimelineElement;
