import { memo, useId } from "react";

import SkillsGroup from "./skillsGroup";
import EducationItem from "./educationItem";
import CertItem from "./cert";
import filterSkillsByLevel from "./filterSkillsByLevel";

import { SkillsPageProps } from "../../../types";

const headlines = {
    good: "I feel reasonably comfortable with:",
    fair: "Continuously improving:",
    basic: "Basic level",
};

function Skills(props: SkillsPageProps) {
    const { skills, education, certs } = props;

    const good = filterSkillsByLevel(skills, "4");
    const fair = filterSkillsByLevel(skills, "3");
    const basic = filterSkillsByLevel(skills, "1");

    const ID = useId();

    return (
        <section className="skills">
            <div className="skills__content">
                <div className="wrapper">
                    <h2 className="page-header">{"Skills & education"}</h2>
                    <h3>Skills:</h3>
                    {good && <SkillsGroup items={good} headline={headlines.good} />}
                    {fair && <SkillsGroup items={fair} headline={headlines.fair} />}
                    {basic && <SkillsGroup items={basic} headline={headlines.basic} />}

                    <h3>Education:</h3>
                    <ul className="education">
                        {education.map(item => {
                            return <EducationItem key={`${ID}-${item.school}`} item={item} />;
                        })}
                    </ul>
                    <h4>
                        Various trainings, courses and certificates,
                        <span className="certItem--text-non-professional"> not only professional</span>:
                    </h4>
                    <ul className="education">
                        {certs.map(cert => {
                            return <CertItem key={`${ID}-${cert.name}`} cert={cert} />;
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default memo(Skills);
