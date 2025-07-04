import { User as FirebaseUser } from "firebase/auth";
import { VerticalTimelineElementProps } from "react-vertical-timeline-component";

// Basic types and primitives
export type Feature = string;

// User and Authentication types
export interface AuthUser {
    uid: string;
    email: string;
    displayName: string;
}

type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};

export type FirebaseUserSubset = {
    [key in keyof Mutable<Pick<FirebaseUser, "uid" | "email" | "displayName">>]: string;
};

// Contact types
export interface ContactType {
    ID: string;
    text: string;
    link: string;
    alias: string;
}

export type Contacts = ContactType[];

// Skills types
export interface SkillInfo {
    skill: string;
    level: string;
}

export type Skills = SkillInfo[];

// Education types
export interface EducationData {
    school: string;
    period: string;
    subject: string;
}

export type Education = EducationData[];

// Certificate types
export interface CertificateType {
    name: string;
    operator: string;
    link: string;
    isProfessional: boolean;
}

// Career types
export interface CareerItem extends VerticalTimelineElementProps {
    period: string;
    name: string;
    link?: string;
    position: string;
    subtitle?: string;
    description: string[];
}

// Project types
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

export interface ProjectNav {
    projectNext: string | undefined;
    projectPrevious: string | undefined;
}

export interface ProjectsPageProps {
    data: Project[];
    featuresList: string[];
}

// Comment types
export interface Comment {
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

// UI Component types
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
    content?: React.ReactNode;
}
