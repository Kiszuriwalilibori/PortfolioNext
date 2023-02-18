import Image from "next/image";
import { memo } from "react";

const Sidebar = () => {
    return (
        <article className="section--aboutme__sidebar sidebar">
            <article className="section--aboutme__author">
                <Image
                    className="author-image section--aboutme__image growImage"
                    src="/images/author.jpg"
                    alt="author foto"
                    width={500}
                    height={500}
                />
                <h1 className="section--aboutme__name">Piotr Maksymiuk</h1>
                <h2 className="section--aboutme__description">Front-End Developer</h2>
                <ul className="section--aboutme__person-experience"></ul>
            </article>
        </article>
    );
};

export default memo(Sidebar);
