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

export type Contacts = Contact[];

export type Skills = Skill[];
