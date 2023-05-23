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
export interface EducationItem {
    school: string;
    period: string;
    subject: string;
}
export interface Cert {
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
    subtitle: string;
}

export type Jobs = Job[];

type ProjectCategory = "A" | "B" | "C";
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

export type Education = EducationItem[];

export interface SkillsPageProps {
    skills: Skill[];
    education: Education;
    certs: Cert[];
}

export interface ProjectsPageProps {
    data: Project[];
    featuresList: string[];
}

export type DesktopSizes = "mobile" | "phablet" | "tablet" | "desktop" | "desktopHD";
