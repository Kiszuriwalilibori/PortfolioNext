import Head from "../head/head";
import Navigation from "../navigation";

type Props = {
    children?: React.ReactNode;
};

export default function ProjectLayout({ children }: Props) {
    return (
        <>
            <Head />
            <Navigation />
            <main className="single-project">{children}</main>
        </>
    );
}
