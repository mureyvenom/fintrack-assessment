"use-cient";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import Link from "next/link";
import Avatar from "./Avatar";

interface Props {
  sideBarToggled?: boolean;
  toggleSidebar?: () => void;
}

const Navbar = ({ sideBarToggled, toggleSidebar }: Props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <header className="antialiased">
        <nav className="bg-white border-transparent px-4 lg:px-12 md:py-3 py-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                onClick={toggleSidebar}
                className="p-2 mr-5 rounded cursor-pointer lg:inline hover:bg-primary-light text-foreground-text transition-all duration-200"
              >
                {sideBarToggled ? (
                  <MdOutlineMenuOpen size={24} />
                ) : (
                  <MdOutlineMenu size={24} />
                )}
              </button>
              <Link href="/dashboard" className="flex mr-4">
                <Image
                  src="/images/logo-with-text.svg"
                  alt="Logo"
                  height={32}
                  width={112}
                />
              </Link>
            </div>
            <div className="flex items-center lg:order-2 gap-2.5">
              <div className="hidden lg:flex">
                <div
                  className={`relative overflow-hidden duration-200 transition-all lg:w-96`}
                  style={{
                    maxWidth: showSearch ? 384 : 0,
                  }}
                >
                  <input
                    type="text"
                    className="border-border-color/62 bg-background-color placeholder:text-border-color/62 border text-foreground-text sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-4 p-2.5 border-"
                    placeholder="Search"
                  />
                </div>
              </div>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded cursor-pointer lg:inline hover:bg-primary-light text-foreground-text transition-all duration-200"
              >
                <FiSearch size={24} />
              </button>
              <button className="p-2 rounded cursor-pointer lg:inline hover:bg-primary-light text-foreground-text transition-all duration-200">
                <IoGridOutline size={24} />
              </button>
              <button type="button" aria-expanded="false">
                <Avatar source="/images/avatar.png" size={40} />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="lg:hidden">
        <div
          className={`relative overflow-hidden duration-200 transition-all px-3`}
          style={{
            maxHeight: showSearch ? 100 : 0,
          }}
        >
          <input
            type="text"
            className="border-primary-light bg-background-color placeholder:text-primary-light border text-foreground-text sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-4 p-2.5 border-"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
