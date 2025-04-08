import { useId } from "react";
import PageTitle from "@/components/pageTitle";
import ContactDetails from "./contact";
import contacts from "@/data/contacts";

export default function Contact() {
    const ID = useId();
    return (
        <section className="contact">
            <div className="leading-image-mobile leading-image-mobile--contact" />
            <div className="contact__content">
                <div className="container">
                    <PageTitle title="Contact me" />
                    <p>
                        <em>I am available for hire and open to any ideas of cooperation</em>
                    </p>
                    <dl>
                        {contacts.map(contact => {
                            return <ContactDetails key={`${ID}--${contact.ID}`} contactData={contact} />;
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}
