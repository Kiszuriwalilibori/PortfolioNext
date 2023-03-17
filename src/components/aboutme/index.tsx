import { memo } from "react";

function AboutmePageContent() {
    return (
        <section className="aboutme">
            <article className="aboutme__content">
                <div className="wrapper">
                    <p> I am web developer by passion and not by education.</p>
                    <p>
                        I learn front-end on my own from web resources, however quite recently got a degree of IT
                        Technician and completed one of CISCO courses.
                    </p>
                    <p>
                        Currently make my living by carrying out small orders.I am available for hire and open to any
                        ideas of cooperation.
                    </p>

                    <hr className="aboutmeBreak"></hr>
                    <p>
                        In my spare time,if the weather is OK I take my bike and and ride in the surrounding woods.
                        Having more time visit Białowieża Forest. Cooling off at home usually listen to the music with
                        loudspeakers I have constructed by myself. Besides, I often make quite palatable home liquors
                        and enjoy them later with family or friends.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default memo(AboutmePageContent);
