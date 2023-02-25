import { memo } from "react";
import { Contacts } from "../../../types";
import Contact from "./contact";

import { useId } from "react";
interface Props {
    data: Contacts;
    title: string;
}
const Content = (props: Props) => {
    const { data, title } = props;

    const ID = useId();
    return (
        <article className="wrapper">
            <h2>{title}</h2>
            <p>
                <i>I am available for hire and open to any ideas of cooperation</i>
            </p>
            <dl>
                {data.map(item => {
                    return <Contact key={`${ID}--${item.ID}`} data={item} />;
                })}
            </dl>
        </article>
    );
};

export default memo(Content);
