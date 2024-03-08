import Head from "next/head";
import capitalize from "lodash/capitalize";
import { useRouter } from "next/router";
import { createPageName, createTitle, descriptions } from "./utils";

const VERSION = "0.2.2";

function MyHead() {
    const router = useRouter();
    const route = router.asPath.slice(1);
    const pageName = createPageName(route);
    const title = createTitle(pageName);

    return (
        <Head>
            <title>{title}</title>
            {descriptions[pageName] && <meta name="description" content={descriptions[pageName]} />}
            <meta name="author" content="Piotr Maksymiuk" />
            <meta name="version" content={VERSION} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Piotr Maksymiuk - Front-End Developer - Portfolio" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content={"https://portfolio-next-ten-sigma.vercel.app/" + route} />
            <meta property="og:image" content="https://portfolio-next-ten-sigma.vercel.app/next.jpg" />
            {/* todo w powyższej linii jest miejsce na customowe obrazy dla podstron */}
            {descriptions[pageName] && <meta property="og:description" content={descriptions[pageName]} />}
            {pageName && <meta property="og:title" content={capitalize(pageName)} />}
            <link rel="icon" href="/portfolio.svg" />
            {/* todo w powyższej linii jest miejsce na customowe ikony dla podstron */}
            <link rel="apple-touch-icon" href="/android192.png" />
        </Head>
    );
}
export default MyHead;
