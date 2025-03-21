import { headers } from "next/headers";
export async function generateMetadata() {
    const headerList = headers();
    const pathname = (await headerList).get("x-current-path");

    return {
        title: "generated metadata" + pathname,
    };
}

export default async function About() {
    return <h1>About me</h1>;
}
