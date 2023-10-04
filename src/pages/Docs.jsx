/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoIosArrowForward, IoMdCopy, IoIosArrowBack } from "react-icons/io";
import {
  SiNextdotjs,
  SiVite,
  SiRemix,
  SiGatsby,
  SiAstro,
  SiLaravel,
} from "react-icons/si";

function Docs() {
  return (
    <div className="min-h-screen relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 mx-5">
        {/*left sidebar content */}
        <div className="sticky top-0 text-start hidden md:flex flex-col py-4 border-none box-border h-screen md:w-auto lg:w-80 overflow-hidden hover:overflow-y-scroll">
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
        <div className="md:col-start-2 md:col-span-2 py-4 md:w-4/5 lg:w-full md:mx-5">
          <div className="flex justify-start space-x-1">
            <p className="text-[#969697]">Docs</p>
            <IoIosArrowForward className="mt-1.5 text-[#969697]" />
            <p>Installation</p>
          </div>
          <div className="py-4 space-y-3">
            <h1 className="font-bold text-4xl">Installation</h1>
            <p className="text-[#969697] text-lg">
              How to install dependencies and structure your app.
            </p>
          </div>
          <div className="mt-3 ">
            <h1 className="font-medium text-2xl box-border border-b dark:border-[#27272A] py-3">
              Frameworks
            </h1>
            <div className="grid grid-cols-1 md:grid-flow-row lg:grid-cols-2 md:gap-8 gap-y-4 py-8">
              <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                <SiNextdotjs size={42} />
                <a href="#" className="font-bold mt-2">
                  Next.js
                </a>
              </div>
              <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                <SiVite size={42} />
                <a href="#" className="font-bold p-2">
                  Vite
                </a>
              </div>
              <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                <SiRemix size={42} />
                <a href="#" className="font-bold mt-2">
                  Remix
                </a>
              </div>
              <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                <SiGatsby size={42} />
                <a href="#" className="font-bold mt-2">
                  Gatsby
                </a>
              </div>
              <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                <SiAstro size={42} />
                <a href="#" className="font-bold mt-2">
                  Astro
                </a>
              </div>
              <div className="flex flex-col justify-center px-36 rounded-lg h-40 w-auto lg:w-[22rem] hover:bg-[#18181A] border border-[#27272A]">
                <SiLaravel size={42} />
                <a href="#" className="font-bold mt-2">
                  Laravel
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="font-medium text-2xl box-border border-b dark:border-[#27272A] py-2">
              Typescript
            </h1>
            <p>
              This project and the components are written in TypeScript. We
              recommend using TypeScript for your project as well.
            </p>
            <p>
              However we provide a JavaScript version of the components as well.
              The JavaScript version is available via the cli.
            </p>
            <p>
              To opt-out of TypeScript, you can use the{" "}
              <span className="rounded-lg p-1 border-none bg-[#18181A]">
                tsx
              </span>{" "}
              flag in your{" "}
              <span className="rounded-lg p-1 border-none bg-[#18181A]">
                components.json
              </span>{" "}
              file.
            </p>
          </div>
          <div className="py-5">
            <h1 className="font-bold">components.json</h1>
            <div className="mt-2 p-5 rounded-lg border-none bg-[#18181A] h-auto w-full tracking-wide">
              <p>
                &#123;{" "}
                <span className="flex justify-end">
                  <IoMdCopy />
                </span>
              </p>
              <p className="ml-4">
                &quot;style&quot; :{" "}
                <span className="text-[#909092]">&quot;default&quot;</span>,
              </p>
              <p className="ml-4">&quot;tailwind&quot; : &#123;</p>
              <p className="ml-8">
                &quot;config&quot; :{" "}
                <span className="text-[#909092]">
                  &quot;tailwind.config.js&quot;
                </span>
                ,
              </p>
              <p className="ml-8">
                &quot;css&quot; :{" "}
                <span className="text-[#909092]">
                  &quot;src/app/globals.css&quot;
                </span>
                ,
              </p>
              <p className="ml-8">
                &quot;baseColor&quot; :{" "}
                <span className="text-[#909092]">&quot;zinc&quot;</span>,
              </p>
              <p className="ml-8">
                &quot;cssVariables&quot; :{" "}
                <span className="text-[#909092]">&quot;true&quot;</span>,
              </p>
              <p className="ml-4">&#125;,</p>
              <p className="ml-8">
                &quot;rsc&quot; :{" "}
                <span className="text-[#909092]">&quot;false&quot;</span>,
              </p>
              <p className="ml-8">
                &quot;tsx&quot; :{" "}
                <span className="text-[#909092]">&quot;false&quot;</span>,
              </p>
              <p className="ml-8">&quot;aliases&quot; : &#123;</p>
              <p className="ml-16">
                &quot;utils&quot; :{" "}
                <span className="text-[#909092]">&quot;~/lib/utils&quot;</span>,
              </p>
              <p className="ml-16">
                &quot;components&quot; :{" "}
                <span className="text-[#909092]">&quot;~/components&quot;</span>
                ,
              </p>
              <p className="ml-4">&#125;</p> <p>&#125;</p>
            </div>
          </div>
          <div>
            <p>
              To configure import aliases, you can use the following{" "}
              <span className="rounded-lg p-1 border-none bg-[#18181A]">
                jsconfig.json:
              </span>
            </p>
          </div>
          <div className="py-5">
            <h1 className="font-bold">jsconfig.json</h1>
            <div className="mt-2 p-5 rounded-lg border-none bg-[#18181A] h-auto w-full tracking-wide">
              <p>
                &#123;{" "}
                <span className="flex justify-end">
                  <IoMdCopy />
                </span>
              </p>
              <p className="ml-4">&quot;compilerOptions&quot; : &#123;</p>
              <p className="ml-8">&quot;paths&quot; : &#123;</p>
              <p className="ml-16">
                &quot;@/*&quot; :{" "}
                <span className="text-[#909092]">[&quot;./*&quot;]</span>,
              </p>
              <p className="ml-8">&#125;</p>
              <p className="ml-4">&#125;</p>
              <p>&#125;</p>
            </div>
          </div>
          <div className="flex justify-between py-10">
            <button className="border rounded-lg dark:border-[#27272A] h-10 hover:bg-[#18181A]">
              <p className="flex py-1.5 md:mx-5 mx-1">
                <IoIosArrowBack className="m-1 md:m-1.5 text-[#969697]" /> Introduction{" "}
              </p>
            </button>
            <button className="border rounded-lg dark:border-[#27272A] hover:bg-[#18181A] h-10">
              <p className="flex py-1.5 md:mx-5 mx-1">
                components.json{" "}
                <IoIosArrowForward className="m-1 md:m-1.5 text-[#969697]" />
              </p>
            </button>
          </div>
        </div>
        {/* right sidebar content */}
        <div className="sticky top-0 text-center content-center hidden md:flex flex-col py-4 h-screen">
          <p>On this page</p>
          <a href="#" className="mt-2">
            Frameworks
          </a>
          <a href="#" className="mt-1 dark:hover:text-white text-[#969697]">
            Typescript
          </a>
        </div>
      </div>
    </div>
  );
}

export default Docs;
