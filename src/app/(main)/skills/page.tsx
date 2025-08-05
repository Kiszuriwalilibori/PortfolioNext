import Divider from "@mui/material/Divider";
import React from "react";

import { useId } from "react";

import PageTitle from "@/components/pageTitle";

import { SkillsByCategory, EducationItem, Certificate } from "./components";
import { skills } from "@/data/skills";
import { certificates } from "@/data/certificates";
import { education } from "@/data/education";
import { SkillLevel } from "@/types";

const headings: Record<SkillLevel, string> = {
    good: "I feel reasonably comfortable with:",
    fair: "Continuously improving:",
    basic: "Basic level",
};

export default function Skills() {
    if (!skills) {
        return (
            <div className="items-not-found-container">
                <h1 className="items-not-found-title">Nie znaleziono umiejętności</h1>
            </div>
        );
    }

    const ID = useId();

    return (
        <section className="skills">
            <div className="leading-image-mobile leading-image-mobile--skills" />
            <div className="skills__content">
                <div className="container">
                    <PageTitle title="Skills & Education" />
                    <h2>Skills:</h2>
                    <Divider sx={{ width: 1 }} />
                    {Object.entries(skills).map(([level, skillsByLevel], index) => (
                        <React.Fragment key={level}>
                            <SkillsByCategory
                                skillsSelectedByCategory={skillsByLevel as string[]}
                                heading={headings[level as SkillLevel]}
                            />
                            {index < Object.entries(skills).length - 1 && (
                                <Divider sx={{ width: 1 }} />
                            )}
                        </React.Fragment>
                    ))}
                    <Divider sx={{ width: 1 }} />
                    <h2>Education:</h2>
                    <ul className="education">
                        {education &&
                            education.length &&
                            education.map(educationData => {
                                return <EducationItem key={`${ID}-${educationData.school}`} educationData={educationData} />;
                            })}
                    </ul>
                    <h2>
                        Various trainings, courses and certificates,
                        <span className="certificate--text-non-professional"> not only professional</span>:
                    </h2>
                    <ul className="education">
                        {certificates &&
                            certificates.length &&
                            certificates.map(certificate => {
                                return <Certificate key={`${ID}-${certificate.name}`} certificate={certificate} />;
                            })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
