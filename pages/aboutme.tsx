import PageContent from "../src/components/aboutme";
import { useBreakpoints } from "../contexts/ViewPortProvider";
import MobileHeader from "../src/components/headerMobile";

const small = new Set<string>(["mobile", "phablet"]);

export default function AboutMe() {
    const { desktopSize } = useBreakpoints();
    if (!desktopSize) return null;
    return (
        <section className="aboutme">
            {/* {small.has(desktopSize) && <MobileHeader route={"aboutme"} />} */}
            <article className={small.has(desktopSize) ? "aboutme__content-mobile" : "aboutme__content-above-mobile"}>
                <PageContent />
            </article>
        </section>
    );
}
