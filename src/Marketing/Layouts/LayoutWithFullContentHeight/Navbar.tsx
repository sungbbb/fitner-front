import { NavbarWithCallToAction } from "../../Navbars/NavbarWithCallToAction/App";

export const Navbar = ({ ...props }) => {
  return (
    <NavbarWithCallToAction onClick={props.onClick} />
  );
};
