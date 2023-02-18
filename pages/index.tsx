import Head from "next/head";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
import HomePage from "../src/components/home/home-page";

export default function Home({ data }: any) {
    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="Events App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomePage data={data} />
        </>
    );
}

export async function getServerSideProps() {
    const { events_categories } = await import("../data/data.json");
    return {
        props: {
            data: events_categories,
        },
    };
}
