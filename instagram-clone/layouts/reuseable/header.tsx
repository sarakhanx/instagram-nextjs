import Link from "next/link";
import React from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 w-full navbar bg-indigo-500 flex justify-between px-1 sm:px-1 py-2 items-center shadow ">
      <Link
        href="/"
        className="logo-text sm:text-xl ps-1 sm:px-5 text-indigo-300 font-bold cursor-pointer tracking-wider"
      >
        BEHEMOThread
      </Link>

      <div className="">
      <div className="container flex justify-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8 lg:hidden text-indigo-300 block"
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen), console.log(mobileMenuOpen);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>

      </div>
    <div className="container">
    <ul
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } lg:flex lg:justify-between w-auto lg:w-auto space-x-5 lg:space-x-5 space-y-2 lg:mr-3 items-end `}
      >
        <Link
        href="/portfolio"
        >
          <li className="font-semibold text-indigo-300 cursor-pointer text-sm sm:text-base" >
            PORTFOLIO
          </li>
        </Link>

        <li>
          <Link
          href="/feed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-300 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-300 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </div>

      

      
      
      </div>
    </nav>
  );
}
