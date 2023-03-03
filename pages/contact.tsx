import PageContent from "../src/components/contact";

import { Contacts } from "../types";

interface Props {
    contacts: Contacts;
}

export default function Contact(props: Props) {
    const { contacts } = props;
    return <PageContent data={contacts} />;
}

export async function getStaticProps() {
    const { contacts } = await import("../data/contacts.json");
    return {
        props: {
            contacts: contacts,
        },
    };
}
