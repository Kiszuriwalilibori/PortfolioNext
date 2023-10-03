import Head from "next/head";
import { useRouter } from "next/router";
import capitalize from "lodash/capitalize";

const descriptions: {
    [key: string]: string;
} = {
    aboutme: "Basic informations about author, the details are covered on other pages ",
    skills: "Acquired skills, gained certificates, graduated schools, completed trainings and other educational events",
    career: "The abbreviated history of employment, with short chracteristic of job and taks.",
    projects: "The list and brief descriptions of projects I have completed and working on currently.",
    contact: "My contact details. Currently, I am available for hire and open to any ideas of cooperation.",
    "projects/Cryptocurrency Tracker":
        "Simple application for monitoring crypto currency values in PLN, USD, and Euro in time intervals of 3 seconds",
    "projects/Decision Tree":
        "App supporting creation of branched structure of options, enforcing them being unique, developed with create-react-app",
    "projects/Firebase":
        "Application that fetches and presents persons data collected with Firebase back-end and permits adding/deleting them subject to authentication.",
    "projects/Google Books Finder":
        "Application for finding books in GoogleBooks resources, displays its data in tabelarised form and permits some basing operations (sorting, getting more complete data etc.)",
    "projects/PortfolioNext":
        "This portfolio. That is current version, presents my skills, is also the very first attempt to work with Next.js.",
    "projects/Unsplash":
        "Simplified Unsplash web site created using create-react-app. Similar to original, but with some different logic and limited capabilities",
    "projects/Weather Forecast":
        "Simple weather application with current weather, forecast, and comparision between locations",
    "projects/Chat": "Simple application that imitates chat app with voice messages. Built with create-react-app",
    "projects/Minifigs": "This app sends one minifig of Hatty Potter for free if you believe in fairy tales",
    "projects/YouTube Player":
        "Simple You Tube player allowing choice of video subject, and watching this video in YouTube player utility. Fully responsive, made with create-react-app and redux.",
    "projects/Athletes":
        "With this app, one can get get surprising facts about well-known athletes (their hidden potential).",
    "projects/Dancer portfolio": "The portfolio of author, last before current one, demonstrating joy of life.",
    "projects/Floydian Portfolio":
        "The portfolio of author, quite old. Inspired greatly by Pink Floyd universum, mainly the Dark Side of the Mooon.",
    "projects/Physioterapy": "Web page of physioterapy practice, with many interesting facts about human health",
    "projects/Space Portfolio":
        "Author portfolio dedicated to space, inspired by Stanisław Lem and and Apollo 14 mission",
};
function MyHead() {
    const router = useRouter();
    const route = router.asPath.slice(1);
    const pageName = route ? route.replaceAll("%20", " ") : "aboutme";
    const title = `Piotr Maksymiuk/Front-End Developer/Portfolio/${capitalize(pageName.replaceAll("%20", " "))} `;

    return (
        <Head>
            <title>{title}</title>
            {descriptions[pageName] && <meta name="description" content={descriptions[pageName]} />}
            <meta name="author" content="Piotr Maksymiuk" />
            <meta name="version" content="0.1.0" />
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
