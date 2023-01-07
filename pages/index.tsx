import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="Events App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <header>
                    <nav>
                        <img />

                        <Link href="/">Home</Link>
                        <Link href="/events">Events</Link>
                        <Link href="about-us">
                            <a>About us</a>
                        </Link>
                    </nav>
                </header>

                {data.map((item: any) => (
                    <a key={item.id} href={`/events/${item.id}`}>
                        <Image alt={item.title} width={200} height={160} src={item.image} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </a>
                ))}
            </main>
            <footer className={styles.footer}>
                <p>Time to code</p>
            </footer>
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
