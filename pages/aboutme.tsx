import Image from "next/image";
import Sidebar from "../src/components/aboutme/sidebar";
import MobileHeader from "../src/components/aboutme/mobile-header";
import Content from "../src/components/aboutme/content";
import { useBreakpoints } from "../contexts/ViewPortProvider";

const small = new Set<string>(["mobile", "phablet"]);

export default function AboutMe() {
    const { desktopSize } = useBreakpoints();
    if (!desktopSize) return null;
    return (
        <section className=/*"section section--aboutme*/ "aboutme">
            {!small.has(desktopSize) && <Sidebar />}
            {small.has(desktopSize) && <MobileHeader />}
            <article className={small.has(desktopSize) ? "aboutme__content-mobile" : "aboutme__content-above-mobile"}>
                <Content />
            </article>
        </section>
    );
}
