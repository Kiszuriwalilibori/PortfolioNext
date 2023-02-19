import Image from "next/image";
import { memo } from "react";

const MobileHeader = () => {
    return (
        <article className="mobile-header">
            <Image width={100} height={100} className="image" src="/images/author.jpg" alt="author foto" />
            <h1 className="name">Piotr Maksymiuk</h1>
            <h2 className="description">Front-End Developer</h2>
        </article>
    );
};

export default memo(MobileHeader);
