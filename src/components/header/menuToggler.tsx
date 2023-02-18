import { memo, MouseEventHandler } from "react";

interface Props {
    clickHandler: MouseEventHandler<HTMLButtonElement>;
}
const MenuToggler = (props: Props) => {
    const { clickHandler } = props;
    return (
        <button className="hamburger" onClick={clickHandler}>
            <div className="hamburger__image"></div>
        </button>
    );
};
export default memo(MenuToggler);
