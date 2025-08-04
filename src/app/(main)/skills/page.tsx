import Divider from "@mui/material/Divider";

import { useId } from "react";

import filterSkillsByLevel from "./utils/filterSkillsByLevel";
import PageTitle from "@/components/pageTitle";

import { SkillsByCategory, EducationItem, Certificate } from "./components";
import { skills } from "@/data/skills";
import { certificates } from "@/data/certificates";
import { education } from "@/data/education";
import { SkillLevel, SkillLevels } from "@/types";

const headings: Record<SkillLevel, string> = {
    good: "I feel reasonably comfortable with:",
    fair: "Continuously improving:",
    basic: "Basic level",
};

export default function Skills() {
    if (!skills || skills.length === 0) {
        return (
            <div className="items-not-found-container">
                <h1 className="items-not-found-title">Nie znaleziono umiejętności</h1>
            </div>
        );
    }
    const skillsGood = filterSkillsByLevel(skills, SkillLevels[0]); // "good"
    const skillsFair = filterSkillsByLevel(skills, SkillLevels[1]); // "fair"
    const skillsBasic = filterSkillsByLevel(skills, SkillLevels[2]); // "basic"

    const ID = useId();

    return (
        <section className="skills">
            <div className="leading-image-mobile leading-image-mobile--skills" />
            <div className="skills__content">
                <div className="container">
                    <PageTitle title="Skills & Education" />
                    <h2>Skills:</h2>
                    <Divider sx={{ width: 1 }} />
                    {skillsGood && skillsGood.length && <SkillsByCategory skillsSelectedByCategory={skillsGood} heading={headings.good} />}
                    <Divider sx={{ width: 1 }} />
                    {skillsFair && skillsFair.length && <SkillsByCategory skillsSelectedByCategory={skillsFair} heading={headings.fair} />}
                    <Divider sx={{ width: 1 }} />
                    {skillsBasic && skillsBasic.length && <SkillsByCategory skillsSelectedByCategory={skillsBasic} heading={headings.basic} />}
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
