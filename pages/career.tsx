import { CareerPageContent } from "../src/components/PageContents";
import { Jobs } from "../src/types";
interface Props {
    jobs: Jobs;
}

export default function Career(props: Props) {
    const { jobs } = props;

    return <CareerPageContent jobs={jobs} />;
}

export async function getStaticProps() {
    const { career } = await import("../data/career.json");

    return {
        props: {
            jobs: career,
        },
    };
}
