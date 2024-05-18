import { useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";

const StickyNav = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className="w-full py-3 fixed top-0 backdrop-blur-lg bg-[#fbfbfdcc] border-b border-gray-300 z-[10]">
      <div className="w-full flex justify-between items-center screen-max-width">
        <p className="font-semibold text-xl">MacBook Air</p>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer text-xs transition ${
                  index === activeLink
                    ? "text-gray-500 cursor-default"
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
      </div>
    </nav>
  );
};

export default StickyNav;
