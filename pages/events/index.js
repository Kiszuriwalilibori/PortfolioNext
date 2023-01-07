import Image from "next/image";

const EventsPage = ({ data }) => {
    return (
        <div>
            <h1>Events Page</h1>
            <div>
                {data.map(ev => (
                    <a key={ev.id} href={`/events/${ev.id}`}>
                        <Image alt={ev.title} src={ev.image} width={300} height={160} />
                        <h2>{ev.title}</h2>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import("../../data/data.json");
    console.log(events_categories);
    return {
        props: {
            data: events_categories,
        },
    };
}
