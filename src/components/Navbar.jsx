import { globalNavItems } from "../constants";
import SearchIcon from "/assets/images/SearchIcon.svg";
import CartIcon from "/assets/images/CartIcon.svg";
import Logo from "/assets/images/AppleLogo.svg";

const Navbar = () => {
  return (
    <nav className="w-full py-2  flex justify-between items-center screen-max-width">
      <img src={Logo} className="w-auto h-10 cursor-pointer" alt="logo" />
      <ul className="flex items-center justify-around w-full">
        {globalNavItems.map((item) => (
          <li
            key={item}
            className="text-xs cursor-pointer text-gray-800 hover:text-black  transition-all"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <img
          src={SearchIcon}
          className="w-auto h-10 cursor-pointer"
          alt="search"
        />
        <img
          src={CartIcon}
          className="w-auto h-10 cursor-pointer ml-5"
          alt="cart"
        />
      </div>
    </nav>
  );
};

export default Navbar;
