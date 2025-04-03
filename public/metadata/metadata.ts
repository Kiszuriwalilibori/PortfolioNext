import type { Metadata } from "next";

import { Pages } from "@/models/pages";

export const metadata: {
    [key in Pages]: Metadata;
} = {
    about: {
        title: "About me",
        description: "Basic informations about author, the details are covered on the other pages.",
        openGraph: {
            title: "About me",
            description: "Basic informations about author, the details are covered on the other pages.",
        },
    },
    skills: {
        title: "Skills",
        description: "Acquired skills, gained certificates, graduated schools, completed trainings and other educational events",
        openGraph: {
            title: "Skills",
            description: "Acquired skills, gained certificates, graduated schools, completed trainings and other educational events",
        },
    },
    career: {
        title: "Career",
        description: "The abbreviated history of employment, with short chracteristic of job and taks.",
        openGraph: {
            title: "Career",
            description: "",
        },
    },
    projects: {
        title: "Projects",
        description: "The list and brief descriptions of projects I have completed and working on currently.",
        openGraph: {
            title: "Projects",
            description: "The list and brief descriptions of projects I have completed and working on currently.",
        },
    },
    contact: {
        title: "Contact",
        description: "My contact details. Currently, I am available for hire and open to any ideas of cooperation.",
        openGraph: {
            title: "Contact",
            description: "My contact details. Currently, I am available for hire and open to any ideas of cooperation.",
        },
    },
};

export default metadata;
