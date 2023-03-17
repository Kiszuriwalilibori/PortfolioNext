import { memo, useId } from "react";

import Contact from "./contact";

import { Contacts } from "../../../types";

interface Props {
    data: Contacts;
}
const ContactPageContent = (props: Props) => {
    const { data } = props;

    const ID = useId();
    return (
        <section className="contact">
            <div className="contact__content">
                <div className="container">
                    <h2 className="page__title">Contact me</h2>
                    <p>
                        <i>I am available for hire and open to any ideas of cooperation</i>
                    </p>
                    <dl>
                        {data.map(item => {
                            return <Contact key={`${ID}--${item.ID}`} data={item} />;
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default memo(ContactPageContent);
