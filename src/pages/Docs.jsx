import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SiNextdotjs, SiVite, SiRemix, SiGatsby } from "react-icons/si";

function Docs() {
  return (
    <div className="min-h-screen relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 mx-5">
        {/*left sidebar content */}
        <div className="sticky top-0 text-start hidden md:flex flex-col py-4 border-r box-border h-screen md:w-auto lg:w-80 overflow-hidden hover:overflow-y-scroll">
          <div className="md:mx-8 lg:mx-20 text-base space-y-2">
            <h1 className="font-bold">Getting started</h1>
            <a href="#" className="flex hover:underline text-[#969697]">
              Introduction
            </a>
            <a href="#" className="flex hover:underline font-bold">
              Installation
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              components.json
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Theming
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Darkmode
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              CLI
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Typography
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Figma
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Changelog
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              About
            </a>
          </div>
          <div className="md:mx-8 lg:mx-20 text-base space-y-2 py-5">
            <h1 className="flex font-bold">Installation</h1>
            <a href="#" className="flex hover:underline text-[#969697]">
              Next.js
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Vite
            </a>
            <a hef="#" className="flex hover:underline text-[#969697]">
              Remix
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Gatsby
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Astro
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Laravel
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Manual
            </a>
          </div>
          <div className="md:mx-8 lg:mx-20 text-base space-y-2">
            <h1 className="flex hover:underline font-bold">Dark Mode</h1>
            <a href="#" className="flex hover:underline text-[#969697]">
              Next.js
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Vite
            </a>
          </div>
          <div className="md:mx-10 lg:mx-20 text-base space-y-2 py-5">
            <h1 className="font-bold">Components</h1>
            <a href="#" className="flex hover:underline text-[#969697]">
              Next.js
            </a>
            <a href="#" className="flex hover:underline text-[#969697]">
              Vite
            </a>
          </div>
        </div>
        <div className="md:col-start-2 md:col-span-2 py-4 md:w-4/5 lg:w-full mx-5">
          <div className="flex justify-start space-x-1">
            <p className="text-[#969697]">Docs</p>
            <IoIosArrowForward className="mt-1.5 text-[#969697]"/>
            <p>Installation</p>
          </div>
          <div className="py-4 space-y-3">
            <h1 className="font-bold text-4xl">Installation</h1>
            <p className="text-[#969697] text-lg">How to install dependencies and structure your app.</p>
          </div>
          <div className="mt-3">
            <h1 className="font-medium text-2xl box-border border-b dark:border-[#27272A] py-3">Frameworks</h1>
            <div className="grid grid-cols-1 md:grid-flow-row lg:grid-cols-2 md:gap-8 gap-4 py-8">
                <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                    <SiNextdotjs size={42}/>
                    <a href="#" className="font-bold mt-2">Next.js</a>
                </div>
                <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                    <SiVite size={42}/>
                    <a href="#" className="font-bold p-2">Vite</a>
                </div>
                <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                    <SiRemix size={42}/>
                    <a href="#" className="font-bold mt-2">Remix</a>
                </div>
                <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                    <SiGatsby size={42}/>
                    <a href="#" className="font-bold mt-2">Gatsby</a>
                </div>
            </div>
          </div>
        </div>
        {/* right sidebar content */}
        <div className="sticky top-0 text-center content-center hidden md:flex flex-col py-4 h-screen">
            <p>On this page</p>
            <a href="#" className="mt-2">Frameworks</a>
            <a href="#" className="mt-1 dark:hover:text-white text-[#969697]">Typescript</a>
        </div>
      </div>
    </div>
  );
}

export default Docs;
