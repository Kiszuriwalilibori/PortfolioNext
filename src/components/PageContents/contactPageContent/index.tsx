import { useId } from "react";

import Contact from "./contact";
import PageTitle from "../../pageTitle";

import { Contacts } from "types";

interface Props {
    contactData: Contacts;
}
const ContactPageContent = (props: Props) => {
    const { contactData } = props;

    const ID = useId();
    return (
        <section className="contact">
            <div className="contact__content">
                <div className="container">
                    <PageTitle title="Contact me" />
                    <p>
                        <em>I am available for hire and open to any ideas of cooperation</em>
                    </p>
                    <dl>
                        {contactData.map(contact => {
                            return <Contact key={`${ID}--${contact.ID}`} contactData={contact} />;
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default ContactPageContent;
