import Content from "../src/components/contact/content";
import MobileHeader from "../src/components/headerMobile";
import { useBreakpoints } from "../contexts/ViewPortProvider";
import { Contacts } from "../types";

const small = new Set<string>(["mobile", "phablet"]);

interface Props {
    data: Contacts;
    title: string;
}

export default function Contact(props: Props) {
    const { title, data } = props;
    const { desktopSize } = useBreakpoints();
    if (!desktopSize) return null;
    console.log(props);
    return (
        <section className="contact">
            {/* {small.has(desktopSize) && <MobileHeader route={"contact"} />} */}

            <article className="contact__content">
                <Content data={data} title={title} />
            </article>
        </section>
    );
}

export async function getStaticProps() {
    const { contact } = await import("../data/contact.json");
    return {
        props: {
            data: contact,
            title: "Contact me",
        },
    };
}
