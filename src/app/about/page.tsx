import { headers } from "next/headers";
import { metadata } from "../../../public/metadata";
import { Pages } from "@/types";
export async function generateMetadata() {
    const headerList = headers();
    const pathName = (await headerList).get("x-current-path");
    const page = pathName && pathName.length ? pathName.slice(pathName.lastIndexOf("/") + 1, pathName.length) : "default";

    return metadata[page as Pages];
}

export default async function About() {
    return <h1 className="self-centered">About me</h1>;
}
