import { memo } from "react";
import BasicButton from "../common/BasicButton";
import Image from "next/image";
import { useMenuVisibilityContext } from "../../../contexts/MenuVisibilityProvider";

const MenuToggler = () => {
    const { toggleMenuVisibility } = useMenuVisibilityContext();

    return (
        <BasicButton className="btn btn-normal btn-hamburger" onClick={toggleMenuVisibility}>
            <Image src={`/icons/hamburger.svg`} alt={`menu toggler`} width={30} height={30} />
        </BasicButton>
    );
};
export default memo(MenuToggler);
