import Divider from "@mui/material/Divider";

import { useId } from "react";

import filterSkillsByLevel from "./utils/filterSkillsByLevel";
import PageTitle from "../../pageTitle";

import { SkillsByCategory, EducationItem, Certificate } from "./components";
import { SkillsPageProps } from "types";
/// divider do stylowania poza

const headings = {
    good: "I feel reasonably comfortable with:",
    fair: "Continuously improving:",
    basic: "Basic level",
};

function SkillsPageContent(props: SkillsPageProps) {
    const { skills, education, certificates } = props;

    const good = filterSkillsByLevel(skills, "4");
    const fair = filterSkillsByLevel(skills, "3");
    const basic = filterSkillsByLevel(skills, "1");

    const ID = useId();

    return (
        <section className="skills">
            <div className="skills__content">
                <div className="container">
                    <PageTitle title="Skills & Education" />
                    <h2>Skills:</h2>
                    <Divider sx={{ width: 1 }} />
                    {good.length && <SkillsByCategory skillsSelectedByCategory={good} heading={headings.good} />}
                    <Divider sx={{ width: 1 }} />
                    {fair.length && <SkillsByCategory skillsSelectedByCategory={fair} heading={headings.fair} />}
                    <Divider sx={{ width: 1 }} />
                    {basic.length && <SkillsByCategory skillsSelectedByCategory={basic} heading={headings.basic} />}
                    <Divider sx={{ width: 1 }} />
                    <h2>Education:</h2>
                    <ul className="education">
                        {education.map(educationData => {
                            return (
                                <EducationItem key={`${ID}-${educationData.school}`} educationData={educationData} />
                            );
                        })}
                    </ul>
                    <h2>
                        Various trainings, courses and certificates,
                        <span className="certItem--text-non-professional"> not only professional</span>:
                    </h2>
                    <ul className="education">
                        {certificates.map(cert => {
                            return <Certificate key={`${ID}-${cert.name}`} certificate={cert} />;
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SkillsPageContent;
