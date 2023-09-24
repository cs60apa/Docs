import React from "react";
import { BsBook } from "react-icons/bs";
import { BiCommand, BiLogoGithub, BiLogoTwitter } from "react-icons/bi";
import { RxMoon } from "react-icons/rx";

function Header() {
  return (
    <div className="min-h-screen">
      <div className="border-box border-b border-gray-800 h-20 lg:px-5 pt-2 flex justify-between">
        <div className="hidden md:flex flex-row">
          <p className="text-white text-4xl">DevCircle</p>
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
            <button className="border border-[#27272A] hover:bg-[#27272A] text-[#969697] rounded-lg py-1 w-auto">
              <span className="flex mx-3">
              <p className="line-clamp-1">Search documentation...</p>
                <p className="ml-5 bg-[#27272A] rounded-lg h-6 w-6">
                  <BiCommand className="m-1" />
                </p>
              </span>
            </button>
          </div>
          <div className="flex flex-row text-white mx-3 mb-3 space-x-4">
            <button className="hover:rounded-lg hover:bg-[#27272A] hover:px-1"><BiLogoGithub size={20} /></button>
            <button className="hover:rounded-lg hover:bg-[#27272A] hover:px-1"><BiLogoTwitter size={20} /></button>
            <button className="hover:rounded-lg hover:bg-[#27272A] hover:px-1"><RxMoon size={20} /></button>
          </div>
        </div>
        {/**Mobile view code**/}
        <div className="flex justify-between w-full py-3 md:hidden text-white">
          <div className="flex flex-row py-2">
            <BsBook size={20} className="mt-1.5 m-2"/>
            <button className="border border-[#27272A] text-[#969697] rounded-lg h-8 w-auto">
              <span className="flex mx-3">
                <p className="line-clamp-1">Search documentation...</p>
                <p className="ml-5 bg-[#27272A] rounded-lg h-6 w-6">
                  <BiCommand className="m-1 " />
                </p>
              </span>
            </button>
          </div>
          <div className="flex flex-row text-white space-x-3 mx-2">
            <button className="hover:rounded-lg hover:bg-[#27272A] hover:px-1"><BiLogoGithub size={20} /></button>
            <button className="hover:rounded-lg hover:bg-[#27272A] hover:px-1"><BiLogoTwitter size={20} /></button>
            <button className="hover:rounded-lg hover:bg-[#27272A] hover:px-1"><RxMoon size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
