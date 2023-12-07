import { Mail, Paintbrush2Icon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div
        className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16
      px-6 py-10"
      >
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href="/" className="flex justify-center items-center">
            <Paintbrush2Icon />
            <span className="ml-2 text-xl font-bold object-contain">
              Khedmah
            </span>
          </Link>
          <p className="text-base text-gary-700">
            Khedmah 2023 <br /> All Rights Reserved &copy;
          </p>
          <span className="ml-2 text-xl font-bold">CONTACT</span>
          <Link
            href="tel:968-2450983"
            className="flex justify-center items-center"
          >
            <Phone />
            <span className="ml-2">+968-22151012</span>
          </Link>
          <Link
            href="mailto:info@khedmah.xyz"
            className="flex justify-center items-center"
          >
            <Mail />
            <span className="ml-2"> info@khedmah.xyz</span>
          </Link>
          <p>Ruwi, Muscat Oman</p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>&copy; 2023 Khedmah Limited | All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
