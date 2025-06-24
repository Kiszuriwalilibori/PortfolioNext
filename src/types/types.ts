// import { ModalProps } from "../components/modal/Modal";
import { User as FirebaseUser } from "firebase/auth";
import { VerticalTimelineElementProps } from "react-vertical-timeline-component";

export interface SkillInfo {
    skill: string;
    level: string;
}
export interface ContactType {
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
export interface CertificateType {
    name: string;
    operator: string;
    link: string;
    isProfessional: boolean;
}

export interface CareerItem extends VerticalTimelineElementProps {
    period: string;
    name: string;
    link?: string;
    position: string;
    subtitle?: string;
    description: string[];
}
export type Feature = string;

export interface Project {
    ID: string;
    title: string;
    slug: string;
    description: string;
    category: string;
    features: Feature[];
    longDescription: string[];
    live: string;
    github: string;
    story?: string;
    slides?: string[];
}

export type Contacts = ContactType[];

export type Skills = SkillInfo[];

export type Education = EducationData[];

export interface ProjectsPageProps {
    data: Project[];
    featuresList: string[];
}

// export type { ModalProps };

export interface CommentType {
    author: string;
    active?: boolean;
    content: string;
    created: number;
    ID: string;
    project: string;
    parent?: string;
    authorEmail: string;
    projectID: string;
}

export interface AuthUser {
    uid: string;
    email: string;
    displayName: string;
}

export interface ProjectNav {
    projectNext: string | undefined;
    projectPrevious: string | undefined;
}

export interface ContactType {
    ID: string;
    text: string;
    link: string;
    alias: string;
}

// fbase user

type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};

export type FirebaseUserSubset = { [key in keyof Mutable<Pick<FirebaseUser, "uid" | "email" | "displayName">>]: string };

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
    content?: React.ReactNode;
}
