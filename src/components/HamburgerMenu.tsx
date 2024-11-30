"use client";
import Link from "next/link";
import { useState } from "react";

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { name: "TV", href: "/product/category/TV" },
    { name: "Computers & Tablets", href: "/product/category/Computers" },
    { name: "Cell Phones", href: "/product/category/Phones" },
    { name: "Audio", href: "/product/category/Audio" },
    { name: "Video Games", href: "/product/category/Gaming" },
  ];

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button onClick={handleMenuToggle} className="flex flex-col justify-center items-center p-2 z-20">
        {isMenuOpen ? (
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <p>Menu</p>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <p>Menu</p>
          </div>
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full mt-2 w-80 bg-gray-700 text-white rounded-lg shadow-lg p-4">
          <ul>
            <li className="mb-4 text-sky-400">Shop by department</li>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-4 text-lg">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
