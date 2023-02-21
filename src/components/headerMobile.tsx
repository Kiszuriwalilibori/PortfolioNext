import Image from "next/image";
import { memo } from "react";

interface Props {
    route: string;
}

const HeaderMobile = (props: Props) => {
    const { route } = props;
    const className = `header-mobile header-mobile--${route}`;

    return (
        <article className={className}>
            <Image width={100} height={100} className="image" src="/images/author.jpg" alt="author foto" />
            <h1 className="name">Piotr Maksymiuk</h1>
            <h2 className="description">Front-End Developer</h2>
        </article>
    );
};

export default memo(HeaderMobile);
