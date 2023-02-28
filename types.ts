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

export type Contacts = Contact[];

export type Skills = Skill[];

export type Education = EducationItem[];
