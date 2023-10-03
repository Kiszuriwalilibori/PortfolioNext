export interface Skill {
    skill: string;
    level: string;
}
export interface Contact {
    ID: string;
    text: string;
    link: string;
    alias: string;
}
export interface EducationData {
    school: string;
    period: string;
    subject: string;
}
export interface Certificate {
    name: string;
    operator: string;
    link: string;
    professional: boolean;
}

export interface Job {
    period: string;
    name: string;
    link: string;
    position: string;
    description: string[];
    contentStyle: { background: string; color: string };
    style: {};
    subtitle: string;
}

export type Jobs = Job[];

export interface Project {
    title: string;
    description: string;
    category: string;
    features: string[];
    longDescription: string[];
    live: string;
    github: string;
    story?: string;
    slides?: string[];
}

export type Contacts = Contact[];

export type Skills = Skill[];

export type Education = EducationData[];

export interface SkillsPageProps {
    skills: Skill[];
    education: Education;
    certificates: Certificate[];
}

export interface ProjectsPageProps {
    data: Project[];
    featuresList: string[];
}

export type DesktopSizes = "mobile" | "phablet" | "tablet" | "desktop" | "desktopHD";
