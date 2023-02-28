import { memo, ReactNode, useId } from "react";
import { Job } from "../../../types";
import Icons from "./icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Props {
    jobs: Job[];
}
const Content = (props: Props) => {
    const { jobs } = props;
    const ID = useId();
    return (
        <div className="wrapper">
            <VerticalTimeline layout={"1-column-left"}>
                {jobs.map((job: Job) => {
                    return (
                        <VerticalTimelineElement
                            key={`${ID}-${job.name}`}
                            className="vertical-timeline-element--work"
                            contentStyle={job.contentStyle}
                            contentArrowStyle={{ borderRight: `7px solid  ${job.contentStyle.background}` }}
                            date={job.period}
                            iconStyle={job.contentStyle}
                            icon={job.name && Icons[job.name] ? Icons[job.name]() : undefined}
                        >
                            <h2>{job.name}</h2>
                            <h3 className="vertical-timeline-element-title">{job.position}</h3>
                            {job.subtitle && <h4 className="vertical-timeline-element-subtitle">{job.subtitle}</h4>}
                            {job.description.map(item => {
                                return <p key={item}>{item}</p>;
                            })}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
};

export default memo(Content);
