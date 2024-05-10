import { useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";

const StickyNav = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className="w-full py-2 sm:px-10 px-5 flex justify-between items-center screen-max-width sticky top-0 backdrop-blur-lg">
      <p className="font-semibold text-xl">MacBook Air</p>
      <div className="flex items-center gap-5">
        <ul className="flex items-center gap-5">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer text-xs transition ${
                index === activeLink
                  ? "text-gray-400 cursor-default"
                  : "text-black hover:text-[#0066cc]"
              }`}
              onClick={() => setActiveLink(index)}
            >
              {link}
            </li>
          ))}
        </ul>
        <Button text="Buy" />
      </div>
    </nav>
  );
};

export default StickyNav;
