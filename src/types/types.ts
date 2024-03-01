import { ModalProps } from "../components/modal/Modal";

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
    isProfessional: boolean;
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

export type { ModalProps };

export interface CommentType {
    author: string;
    authorImage: string;
    active?: boolean;
    content: string;
    created: number;
    ID: string;
    project: string;
    parent?: string;
    authorEmail?: string;
}

export interface User {
    id: string;
    email: string | null;
    name: string | null;
    picture: string | null;
}

export interface ProjectNav {
    projectNext: string | undefined;
    projectPrevious: string | undefined;
}
