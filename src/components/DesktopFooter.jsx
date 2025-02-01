import React from "react";
import { Facebook, Instagram } from "lucide-react";

const DesktopFooter = () => {
  const footerLinks = {
    COMPANY: [
      { name: "About Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Product Reviews", href: "#" },
      { name: "Journal", href: "#" },
    ],
    "CUSTOMER CARE": [
      { name: "Payments", href: "#" },
      { name: "Pre-Order", href: "#" },
      { name: "Shipping Policy", href: "#" },
      { name: "Returns Policy", href: "#" },
      { name: "Terms Of Service", href: "#" },
    ],
    SUPPORT: [
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white mt-[3rem]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company, Customer Care, Support Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-6 text-sm font-semibold tracking-wider">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider">
              SIGN UP TODAY
            </h4>
            <form className="mb-4">
              <div className="flex items-center border-b border-white/30 hover:border-white relative transition-colors duration-200">
                <input
                  type="email"
                  placeholder="Enter email here"
                  className="flex-1 bg-transparent py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="ml-2 p-2 absolute right-0 hover:text-gray-300 transition-colors duration-200"
                >
                  →
                </button>
              </div>
            </form>
            <p className="mb-6 text-sm text-gray-300">
              Subscribe to our newsletter receive 10% off your first order!
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-gray-400">
            © 2024, The Good Pet Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
