import { HiddenH1 } from "../../index";
function AboutmePageContent() {
    return (
        <section className="aboutme">
            <HiddenH1 text="About me" />
            <div className="aboutme__content">
                <div className="wrapper">
                    <p> I am front-end developer in love with React and its ecosystem.</p>
                    <p>
                        I used to learn front-end on my own from web resources, however quite recently earned a degree
                        as an IT Technician and completed one of CISCO courses.
                    </p>
                    <p>
                        Currently, do make my living by doing small freelance orders.I am available for hire and open to
                        any ideas of cooperation.
                    </p>

                    <hr className="aboutmeBreak"></hr>
                    <p>
                        In my spare time, if the weather permits I take my bike and and ride through the surrounding
                        forests. Having more time visit Białowieża Forest. Cooling off at home usually listen to the
                        music through loudspeakers I have constructed by myself.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutmePageContent;
