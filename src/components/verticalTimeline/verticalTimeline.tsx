"use client";

import React from "react";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Timeline = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <VerticalTimeline layout={"1-column-left"}>{children}</VerticalTimeline>;
};

export default Timeline;
