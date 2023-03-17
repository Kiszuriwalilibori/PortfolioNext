import Head from "../head";

export default function ProjectLayout({ children }) {
    return (
        <>
        <Head />
            <main>{children}</main>
        </>
    );
}
