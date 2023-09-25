import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsBook } from "react-icons/bs";
import { BiCommand, BiLogoGithub, BiLogoTwitter } from "react-icons/bi";
import { RxMoon } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screeen">
      <div className="border-box border-b border-gray-800 h-20 lg:px-5 pt-2 flex justify-between">
        <div className="hidden md:flex flex-row">
          <p className="text-4xl">DevCircle</p>
          <ul className="flex space-x-4 p-4 font-medium">
            <li className="text-[#969697] hover:text-gray-300">
              <p>Documentation</p>
            </li>
            <li className="text-[#969697] hover:text-gray-300">
              <p>Components</p>
            </li>
            <li className="text-[#969697] hover:text-gray-300">
              <p>Themes</p>
            </li>
            <li className="text-[#969697] hover:text-gray-300">
              <p>Examples</p>
            </li>
            <li className="text-[#969697] hover:text-gray-300">
              <p>Github</p>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex py-3 overflow-hidden">
          <div className="">
            <button className="border border-[#27272A] dark:hover:bg-[#27272A] text-[#969697] rounded-lg py-1 w-auto">
              <span className="flex mx-3">
                <p className="line-clamp-1">Search documentation...</p>
                <p className="ml-5 dark:bg-[#27272A] bg-gray-200 rounded-lg h-6 w-6">
                  <BiCommand className="m-1" />
                </p>
              </span>
            </button>
          </div>
          <div className="flex flex-row mx-3 mb-3 space-x-4">
            <button className="hover:rounded-lg dark:hover:bg-[#27272A] hover:px-1">
              <BiLogoGithub size={20} />
            </button>
            <button className="hover:rounded-lg dark:hover:bg-[#27272A] hover:px-1">
              <BiLogoTwitter size={20} />
            </button>
            <button
              onClick={props.toggleDarkMode}
              className="hover:rounded-lg dark:hover:bg-[#27272A] hover:px-1"
            >
              <RxMoon size={20} />
            </button>
          </div>
        </div>
        {/**Mobile view code**/}
        <div className="flex justify-between w-full pb-3 md:hidden">
          <div className="flex flex-row pb-2">
            <button className="relative " onClick={toggleMenu}>
              <p className="flex justify-center border-none cursor-pointer focus:outline-none">
                <BsBook size={20} className="flex m-2" />
              </p>
              <div
                className={`absolute top-0 left-0 border-box border-r bg-[#ffffff] dark:bg-black dark:text-white border-[#27272A] w-[20rem] h-screen ${
                  isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } z-10 mx-auto`}
              >
                <div className="flex justify-between m-3">
                  <div className="text-3xl">DevCircle</div>
                  <MdOutlineCancel
                    size={25}
                    className="mt-2 cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
                <Link to="#" className="block ml-2">
                  <div className="flex justify-between m-3 ">
                    <h1 className="text-base">Documentation</h1>
                  </div>
                </Link>
                <Link to="#" className="block ml-2">
                  <div className="flex justify-between m-3 ">
                    <h1 className="text-base">Components</h1>
                  </div>
                </Link>
                <Link to="#" className="block pl-2">
                  <div className="flex justify-between m-3 ">
                    <h1 className="text-base">Themes</h1>
                  </div>
                </Link>
                <Link to="#" className="block pl-2">
                  <div className="flex justify-between m-3 ">
                    <h1 className="text-base">Examples</h1>
                  </div>
                </Link>
                <Link to="#" className="block pl-2">
                  <div className="flex justify-between m-3 ">
                    <h1 className="text-base">Github</h1>
                  </div>
                </Link>
                <Link to="#" className="block pl-2">
                  <div className="flex justify-between m-3 ">
                    <h1 className="text-base">Twitter</h1>
                  </div>
                </Link>
                <div className="py-3">
                  <h1 className="flex ml-5 text-lg font-bold ">
                    Getting Started
                  </h1>
                  <Link to="#" className="block pl-2">
                    <div className="flex justify-between m-3 text-[#969697]">
                      <h1 className="text-base">Introduction</h1>
                    </div>
                  </Link>
                  <Link to="#" className="block pl-2">
                    <div className="flex justify-between m-3 text-[#969697]">
                      <h1 className="text-base">Installation</h1>
                    </div>
                  </Link>
                  <Link to="#" className="block pl-2">
                    <div className="flex justify-between m-3 text-[#969697]">
                      <h1 className="text-base">components.json</h1>
                    </div>
                  </Link>
                  <Link to="#" className="block pl-2">
                    <div className="flex justify-between m-3 text-[#969697]">
                      <h1 className="text-base">Theming</h1>
                    </div>
                  </Link>
                  <Link to="#" className="block pl-2">
                    <div className="flex justify-between m-3 text-[#969697]">
                      <h1 className="text-base">Dark Mode</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </button>
            <button className="border border-[#27272A] text-[#969697] rounded-lg h-8 w-auto mt-2.5">
              <span className="flex mx-3">
                <p className="line-clamp-1">Search documentation...</p>
                <p className="ml-5 dark:bg-[#27272A] bg-gray-200 rounded-lg h-6 w-6">
                  <BiCommand className="m-1 " />
                </p>
              </span>
            </button>
          </div>
          <div className="flex flex-row space-x-3 mx-2 ">
            <button className="hover:rounded-lg dark:hover:bg-[#27272A] hover:px-1">
              <BiLogoGithub size={20} />
            </button>
            <button className="hover:rounded-lg dark:hover:bg-[#27272A] hover:px-1">
              <BiLogoTwitter size={20} />
            </button>
            <button
              onClick={props.toggleDarkMode}
              className="hover:rounded-lg dark:hover:bg-[#27272A] hover:px-1"
            >
              <RxMoon size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
