import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <link rel="preload" as="image" href="/mobile-backgrounds/aboutme.webp" type="image/webp" />
            </Head>
            <section className="aboutme">
            <div className="leading-image-mobile leading-image-mobile--about" />
            <h1 className="sr-only">About me</h1>
            <div className="aboutme__content">
                <div className="wrapper">
                    <h2 className="sr-only">Introduction</h2>
                    <p> I am front-end developer in love with React and its ecosystem.</p>
                    <p>I used to learn front-end on my own from web resources, however quite recently earned a degree as an IT Technician and completed one of CISCO courses.</p>
                    <p>Currently, do make my living by doing small freelance orders.I am available for hire and open to any ideas of cooperation.</p>

                    <hr className="aboutmeBreak"></hr>
                    <p>In my spare time, if the weather permits, I take my bike and and ride through the surrounding forests. Having more time do visit Białowieża Forest. Cooling off at home usually means listening to the music through loudspeakers I have constructed it myself.</p>
                </div>
            </div>
        </section>
        </>
    );
}
