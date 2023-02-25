import { memo, useId } from "react";
import { Skill, Education, Cert } from "../../../types";
import SkillsGroup from "./skillsGroup";
import EducationItem from "./educationItem";
import CertItem from "./cert";

const headlines = {
    good: "I feel reasonably comfortable with:",
    fair: "Continuously improving:",
    basic: "Basic level",
};

interface Props {
    skills: Skill[];
    education: Education;
    certs: Cert[];
}

function filterSkillsByLevel(ary: Skill[], level: string) {
    const result = ary.filter(skill => {
        return skill.level === level ? true : false;
    });
    return result;
}
function Skills(props: Props) {
    const { skills, education, certs } = props;
    const good = filterSkillsByLevel(skills, "4");
    const fair = filterSkillsByLevel(skills, "3");
    const basic = filterSkillsByLevel(skills, "1");

    const ID = useId();

    return (
        <article className="wrapper">
            <h2>{"Skills & education"}</h2>
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
        </article>
    );
}

export default memo(Skills);
