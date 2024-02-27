import { ProjectNav } from "types";

function findNext(item: string, array: string[]) {
    const nextIndex = array.indexOf(item) + 1;
    if (nextIndex in array) {
        return array[nextIndex];
    } else {
        return array[0];
    }
}

function findPrevious(item: string, array: string[]) {
    const previousIndex = array.indexOf(item) - 1;
    if (previousIndex in array) {
        return array[previousIndex];
    } else {
        return array[array.length - 1];
    }
}

export function createProjectNav(title: string, array: string[]): ProjectNav {
    const projectNav = {
        projectNext: `/projects/${findNext(title, array)}`,
        projectPrevious: `/projects/${findPrevious(title, array)}`,
    };

    return projectNav;
}

export default createProjectNav;
