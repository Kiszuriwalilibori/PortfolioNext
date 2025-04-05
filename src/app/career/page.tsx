import { useId } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import Icons from "./icons";

import { Company, Duties, Position, Project } from "./styled";
import PageTitle from "@/components/pageTitle";
import { Job } from "@/types";
import career from "@/data/career";

function Career() {
    const ID = useId();

    return (
        <section className="jobs">
            <article className="jobs__content" aria-label=" details about author's jobs">
                <div className="container">
                    <PageTitle title="Jobs" isWhite />
                    <VerticalTimeline layout={"1-column-left"}>
                        {career.map((job: any) => {
                            return (
                                <VerticalTimelineElement
                                    id={`${ID}-${job.period}`.replace(/\s/g, "")}
                                    key={`${ID}-${job.period}`}
                                    className="vertical-timeline-element--work"
                                    contentStyle={job.contentStyle}
                                    contentArrowStyle={{ borderRight: `7px solid  ${job.contentStyle.background}` }}
                                    date={job.period}
                                    iconStyle={job.contentStyle}
                                    icon={job.name && Icons[job.name] ? Icons[job.name]() : undefined}
                                >
                                    <Company>{job.name}</Company>

                                    <Position>{job.position}</Position>

                                    {job.subtitle && <Project>{job.subtitle}</Project>}
                                    {job.description.map((item: any) => {
                                        return <Duties key={item}>{item}</Duties>;
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

export default Career;
