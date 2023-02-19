import { memo, MouseEventHandler } from "react";
import BasicButton from "../common/BasicButton";
import Image from "next/image";
interface Props {
    clickHandler: MouseEventHandler<HTMLButtonElement>;
}
const MenuToggler = (props: Props) => {
    const { clickHandler } = props;
    console.log(props);
    return (
        <BasicButton className="btn btn-normal btn-hamburger" onClick={clickHandler}>
            <Image src={`/icons/hamburger.svg`} alt={`menu toggler`} width={30} height={30} />
        </BasicButton>
    );
};
export default memo(MenuToggler);
