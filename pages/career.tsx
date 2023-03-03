import PageContent from "../src/components/jobs";

import { Jobs } from "../types";
interface Props {
    data: Jobs;
}

export default function Career(props: Props) {
    const { data } = props;

    return <PageContent jobs={data} />;
}

export async function getStaticProps() {
    const { career } = await import("../data/career.json");

    return {
        props: {
            data: career,
        },
    };
}
