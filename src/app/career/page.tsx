import { useId } from "react";

import { Timeline, TimelineElement } from "@/components/verticalTimeline";
import { career } from "@/data/career";
import { test } from "@/utils/test";
import { CareerItem } from "@/types";

import Icons from "./icons";
import PageTitle from "@/components/pageTitle";
import { Company, Duties, Position, Project } from "./styled";

function Career() {
    const ID = useId();
    test();

    return (
        <section className="jobs">
            <div className="leading-image-mobile leading-image-mobile--career" />
            <article className="jobs__content" aria-label=" details about author's jobs">
                <div className="container">
                    <PageTitle title="Jobs" isWhite />
                    <Timeline>
                        {career.map((job: CareerItem) => {
                            return (
                                <TimelineElement
                                    id={`${ID}-${job.period}`.replace(/\s/g, "")}
                                    key={`${ID}-${job.period}`}
                                    className="vertical-timeline-element--work"
                                    contentStyle={job.contentStyle}
                                    contentArrowStyle={{ borderRight: `7px solid  ${job.contentStyle!.background}` }}
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
                                </TimelineElement>
                            );
                        })}
                    </Timeline>
                </div>
            </article>
        </section>
    );
}

export default Career;

// todo przepisać te jobsrelated na kalsę abstra
