"use client";
import Link from "next/link";
import { useState } from "react";

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // Track the active category

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCategoryClick = (category: any) => {
    setActiveCategory(category);
  };

  const handleBackToMenu = () => {
    setActiveCategory(null);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setActiveCategory(null);
  };

  const menuItems = [
    {
      name: "TVs & Home Audio",
      subItems: [
        { name: "Soundbars", href: "/search?q=soundbar" },
        { name: "All TVs", href: "/product/category/TV" },
      ],
    },
    {
      name: "Computers & Tablets",
      subItems: [
        { name: "Desktops", href: "/product/category/Desktops" },
        { name: "Laptops", href: "/product/category/Laptops" },
        { name: "Tablets", href: "/product/category/Tablets" },
        { name: "Monitors", href: "/product/category/Monitors" },
        { name: "Keyboards", href: "/product/category/Keyboards" },
        { name: "Mice", href: "/product/category/Mice" },
      ],
    },
    {
      name: "Cell Phones",
      subItems: [
        { name: "iPhone", href: "/search?q=iphone" },
        { name: "Samsung Galaxy", href: "/search?q=galaxy" },
        { name: "Google", href: "/search?q=pixel" },
        { name: "All Cell Phones", href: "/product/category/Phones" },
      ],
    },
    {
      name: "Wearable Technology",
      subItems: [
        { name: "Apple Watch", href: "/search?q=apple watch" },
        { name: "Samsung Galaxy", href: "/search?q=galaxy watch" },
        { name: "Fitness Trackers", href: "/search?q=fit" },
        { name: "All Watches", href: "/product/category/Watches" },
      ],
    },
    {
      name: "Audio",
      subItems: [
        { name: "Headphones", href: "/product/category/Headphones" },
        { name: "Bluetooth Speakers", href: "/product/category/BluetoothSpeakers" },
        { name: "Computer Speakers", href: "/product/category/ComputerSpeakers" },
      ],
    },
    {
      name: "Video Games",
      subItems: [
        { name: "PlayStation", href: "/search?q=playstation" },
        { name: "Xbox", href: "/search?q=xbox" },
        { name: "Nintendo Switch", href: "/search?q=switch" },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button onClick={handleMenuToggle} className="flex flex-col justify-center items-center p-2 z-20">
        {isMenuOpen ? (
          <div className="flex items-center space-x-1">
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
          <div className="flex items-center space-x-1">
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

      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={handleCloseMenu} />}

      {/* Menu or Sub-category Display */}
      {isMenuOpen && (
        <div className="absolute top-full my-4 w-80 bg-white p-4 font-normal z-20">
          {!activeCategory ? (
            <ul>
              <li className="text-black mb-2">Shop by department</li>
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleCategoryClick(item.name)}
                  className="py-2 text-blue-700 text-lg border-t border-neutral-400 hover:underline flex flex-row items-center justify-between cursor-pointer"
                >
                  <span>{item.name}</span>
                  <span className="pr-1 text-base font-semibold">&gt;</span>
                </li>
              ))}
            </ul>
          ) : (
            // Sub-menu for the active category
            <div>
              <div className="flex flex-row">
                <button
                  onClick={handleBackToMenu}
                  className="mb-4 text-blue-700 hover:underline text-sm flex items-center"
                >
                  <span className="pr-1 text-xs">&lt;</span>
                  <span className="border-r pr-2 py-1 font-semibold border-neutral-300">Back</span>
                </button>
                <span className="mb-4 text-black text-base font-semibold pl-2">{activeCategory}</span>
              </div>
              <ul>
                {menuItems
                  .find((item) => item.name === activeCategory)
                  ?.subItems?.map((subItem) => (
                    <li
                      key={subItem.name}
                      className="py-2 text-blue-600 text-lg border-t border-neutral-400 hover:underline"
                    >
                      <Link href={subItem.href}>{subItem.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
