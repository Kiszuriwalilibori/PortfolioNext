import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectUtils } from "@/models/projects";
import { SingleProjectInformations, SingleProjectInformationsColumn, StackDivider } from "./styled";
import { Description, Features, Header, Links, ProjectsSwitch } from "./parts";

import { Comments, AddCommentButton } from "./Comments";

const BASE_URL = "https://portfolio-next-ten-sigma.vercel.app";
const DEFAULT_KEYWORDS = ["portfolio", "developer", "react", "next.js"];
const DEFAULT_ROBOTS = {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
};
const DEFAULT_AUTHORS = [{ name: "Kiszuriwalilibori", url: BASE_URL }];
const DEFAULT_OG = {
    siteName: "PortfolioNext",
    type: "website",
    locale: "en_US",
};

const createProjectMetadata = (project: { title: string; description: string; slug: string; features: string[]; slides?: string[] }): Metadata => ({
    title: `${project.title} | Portfolio`,
    description: project.description,
    keywords: [...DEFAULT_KEYWORDS, ...project.features],
    alternates: {
        canonical: `${BASE_URL}/projects/${project.slug}`,
    },
    openGraph: {
        ...DEFAULT_OG,
        title: project.title,
        description: project.description,
        url: `${BASE_URL}/projects/${project.slug}`,
        images: project.slides && project.slides[0] ? [{ url: `${BASE_URL}${project.slides[0]}`, width: 1200, height: 630 }] : [],
    },
    twitter: {
        card: "summary_large_image",
        title: project.title,
        description: project.description,
        creator: "@Kiszuriwalilib1",
        images: project.slides && project.slides[0] ? [{ url: `${BASE_URL}${project.slides[0]}`, width: 1200, height: 630 }] : [],
    },
    robots: DEFAULT_ROBOTS,
    authors: DEFAULT_AUTHORS,
});

export async function generateMetadata({ params }: { params: Promise<{ projectSlug: string }> }): Promise<Metadata> {
    const projectSlug = (await params).projectSlug;
    const project = ProjectUtils.getProjectBySlug(projects, projectSlug);
    if (!project) {
        return {
            title: "Project Not Found | Portfolio",
            description: "The requested project could not be found.",
            alternates: { canonical: `${BASE_URL}/projects` },
            openGraph: { ...DEFAULT_OG, title: "Project Not Found", description: "The requested project could not be found." },
            twitter: { card: "summary_large_image", title: "Project Not Found", description: "The requested project could not be found." },
        };
    }
    return createProjectMetadata(project);
}

export async function generateStaticParams() {
    return projects.map(project => ({
        projectSlug: project.slug,
    }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ projectSlug: string }> }) {
    const projectSlug = (await params).projectSlug;

    const project = ProjectUtils.getProjectBySlug(projects, projectSlug);
    if (!project) {
        return <h1>Project not found</h1>;
    }

    return (
        <>
            <ProjectsSwitch projectSlug={projectSlug} />
            <Header title={project.title} description={project.description} />
            <SingleProjectInformations direction={{ md: "row" }} divider={<StackDivider />}>
                <SingleProjectInformationsColumn>
                    <Links github={project.github} live={project.live} />
                    <AddCommentButton ID={project.ID} title={project.title} />

                    <Comments projectID={project.ID} title={project.title} />
                </SingleProjectInformationsColumn>

                <SingleProjectInformationsColumn>
                    <h2>Story</h2>
                    {project.story}
                </SingleProjectInformationsColumn>

                <SingleProjectInformationsColumn>
                    <h2>Tech</h2>
                    <Description longDescription={project.longDescription} />
                    <Features features={project.features} />
                </SingleProjectInformationsColumn>
            </SingleProjectInformations>
        </>
    );
}
