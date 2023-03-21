import Head from "next/head";
import { useRouter } from "next/router";
import capitalize from "lodash/capitalize";

const descriptions = {
    aboutme: "Basic informations about Piotr Maksymiuk",
    skills: "Acquired skills, gained certificates, graduated schools, completed trainings and other educational events",
    career: "The history of employment",
    projects: "The list and brief descriptions of projects I have completed",
    contact: "My contact details. Currently, I am available for hire and open to any ideas of cooperation.",
};
function MyHead() {
    const router = useRouter();
    const route = router.asPath.slice(1);
    const pageName = route ? route : "aboutme";
    const title = `${capitalize(pageName)} - Piotr Maksymiuk - Front-End Developer - Portfolio`;
    return (
        <Head>
            <title>{title}</title>
            {descriptions[pageName] && <meta name="description" content={descriptions[pageName]} />}
            <meta name="author" content="Piotr Maksymiuk" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Piotr Maksymiuk - Front-End Developer - Portfolio" />
            <meta property="og:locale" content="en_US" />
            {pageName && <meta property="og:title" content={capitalize(pageName)} />}
            <link rel="icon" href="/portfolio.svg" />
            {/* w powyższej linii jest miejsce na customowe ikony dla podstron */}
        </Head>
    );
}
export default MyHead;
