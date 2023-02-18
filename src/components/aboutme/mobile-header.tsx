import Image from "next/image";
import { memo } from "react";

const MobileHeader = () => {
    return (
        <article className="section--aboutme-mobile__top">
            <Image
                width={100}
                height={100}
                className="author-image author-image--mobile"
                src="/images/author.jpg"
                alt="author foto"
            />
            <h1 className="section--aboutme__person-name">Piotr Maksymiuk</h1>
            <h2 className="section--aboutme__person-description">Front-End Developer</h2>
        </article>
    );
};

export default memo(MobileHeader);
