import { Project } from "@/types";

interface Props {
    title: Project["title"];
    description: Project["description"];
}

export const Header = (props: Props) => {
    const { title, description } = props;
    return (
        <header className={`top-section top-section--${title.toLowerCase().split(" ").join("-")}`}>
            <div className="project-screen"></div>
            <div className="project-container">
                <div className="header">
                    <h1 className="header__title">{title}</h1>
                    <h2 className="header__subtitle">{description}</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
