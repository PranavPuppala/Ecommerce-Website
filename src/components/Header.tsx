import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";

const categories = [
  { name: "Top Deals", href: "/product/deals" },
  { name: "Memberships", href: "/product/deals" },
  { name: "Order Status", href: "/order/" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold -ml-8">
          <Link href="/" className="mr-8">
            Commerce Electronics
          </Link>
          <HamburgerMenu />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="text-lg">
              {category.name}
            </Link>
          ))}

          <Link href="/user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
          <Link href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
