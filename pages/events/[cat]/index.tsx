import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, pageName }: any) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            {data.map((ev: any) => (
                <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref legacyBehavior>
                    <div>
                        <Image alt={ev.title} src={ev.image} width={300} height={160} />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default EventsCatPage;

export async function getStaticPaths() {
    const { events_categories } = await import("../../../data/data.json");
    const allPaths = events_categories.map(ev => {
        return { params: { cat: ev.id.toString() } };
    });

    //console.log(allPaths);
    return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context: any) {
    console.log("context", context);
    const { allEvents } = await import("../../../data/data.json");
    const id = context?.params.cat;
    //console.log(id);
    const data = allEvents.filter(ev => ev.city === id);
    console.log(data);
    return { props: { data, pageName: id } };
}
