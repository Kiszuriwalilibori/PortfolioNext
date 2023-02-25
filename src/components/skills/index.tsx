import { memo, useId } from "react";
import { Skill, Education, Cert } from "../../../types";
import SkillsList from "./skillsList";
import EducationItem from "./educationItem";
import CertItem from "./cert";

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
            {good && (
                <>
                    <h4>I feel reasonably comfortable with: </h4>
                    <SkillsList items={good} />
                </>
            )}
            {fair && (
                <>
                    <h4>Continuously improving:</h4>
                    <SkillsList items={fair} />
                </>
            )}
            {basic && (
                <>
                    <h4>Basic level:</h4>
                    <SkillsList items={basic} />
                </>
            )}

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
