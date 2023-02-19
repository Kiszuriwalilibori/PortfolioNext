import Image from "next/image";
import { memo } from "react";

const Sidebar = () => {
    return (
        <article className="aboutme__sidebar">
            <article className="author">
                <Image className="image" src="/images/author.jpg" alt="author foto" width={500} height={500} />
                <h1 className="name">Piotr Maksymiuk</h1>
                <h2 className="description">Front-End Developer</h2>
            </article>
        </article>
    );
};

export default memo(Sidebar);
