import Content from "../src/components/jobs";
import { Job } from "../types";
interface Props {
    data: Job[];
    title: string;
}

export default function Career(props: Props) {
    const { data, title } = props;

    return (
        <section className="jobs">
            <article className="jobs__content">
                <Content jobs={data} />
            </article>
        </section>
    );
}

export async function getStaticProps() {
    const { career } = await import("../data/career.json");

    return {
        props: {
            data: career,
        },
    };
}
