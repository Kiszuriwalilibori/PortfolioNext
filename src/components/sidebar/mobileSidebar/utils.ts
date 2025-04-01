export function createMobileSidebarData(route: string) {
    const postfix = route ? route : "aboutme";
    const className = `header-mobile header-mobile--${postfix}`;
    const aria = `header mobile ${postfix}`;

    return { className, aria };
}
