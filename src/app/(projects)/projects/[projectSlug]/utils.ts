import { Project, ProjectNav } from "@/types";
import { projects } from "@/data/projects";
import { ProjectUtils } from "@/models/projects";

const slugs = ProjectUtils.getSlugs(projects);
function findNext(item: Project["slug"], array: Project["slug"][]) {
    const nextIndex = array.indexOf(item) + 1;
    if (nextIndex in array) {
        return array[nextIndex];
    } else {
        return array[0];
    }
}

function findPrevious(item: Project["slug"], array: Project["slug"][]) {
    const previousIndex = array.indexOf(item) - 1;
    if (previousIndex in array) {
        return array[previousIndex];
    } else {
        return array[array.length - 1];
    }
}

export function createProjectNav(slug: Project["slug"]): ProjectNav {
    const projectNav = {
        projectNext: `/projects/${findNext(slug, slugs)}`,
        projectPrevious: `/projects/${findPrevious(slug, slugs)}`,
    };

    return projectNav;
}

export default createProjectNav;
