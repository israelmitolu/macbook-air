import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item) => (
            <div
              key={item}
              className="px-5 text-xs cursor-pointer text-gray-800 hover:text-black  transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
