import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 text-[#0000008e]">
      <div className="screen-max-width">
        <div>
          <p className="font-normal text-xs">
            More ways to shop:{" "}
            <span className="underline cursor-pointer text-[#0066cc]">
              Find an Apple Store{" "}
            </span>
            or{" "}
            <span className="underline cursor-pointer text-[#0066cc]">
              other retailer
            </span>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className="bg-neutral-300 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between text-xs">
          <p>Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="hover:underline transition-all cursor-pointer"
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
          <p>United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
