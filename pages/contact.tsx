import { ContactPageContent } from "../src/components/PageContents";

import { Contacts } from "../types";

interface Props {
    contacts: Contacts;
}

export default function Contact(props: Props) {
    const { contacts } = props;
    return <ContactPageContent contactData={contacts} />;
}

export async function getStaticProps() {
    const { contacts } = await import("../data/contacts.json");
    return {
        props: {
            contacts: contacts,
        },
    };
}
