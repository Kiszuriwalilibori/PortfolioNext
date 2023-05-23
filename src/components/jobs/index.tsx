import { memo, useId } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import Icons from "./icons";
import { Job, Jobs } from "../../../types";

interface Props {
    jobs: Jobs;
}
function Content(props: Props) {
    const { jobs } = props;
    const ID = useId();

    return (
        <section className="jobs">
            <article className="jobs__content">
                <div className="container">
                    <h2 className="page__title page__title--white">Jobs</h2>
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
                                    <h2 className="page__title page__title--narrow">{job.name}</h2>
                                    <h3 className="vertical-timeline-element-title">{job.position}</h3>
                                    {job.subtitle && (
                                        <h4 className="vertical-timeline-element-subtitle">{job.subtitle}</h4>
                                    )}
                                    {job.description.map(item => {
                                        return <p key={item}>{item}</p>;
                                    })}
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>
                </div>
            </article>
        </section>
    );
}

export default memo(Content);
