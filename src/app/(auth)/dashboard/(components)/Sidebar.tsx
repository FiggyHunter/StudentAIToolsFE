"use client"

import SidebarItem from "./SidebarItem"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { fileToMd, MdToSummary, TasksFromMd, AiCheckGrammar, TextToSpeech, Notes } from "../icons"
import { useState } from "react";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {

  const closeSidebar = () => {
    toggleSidebar(false);
  };

  const pathname = usePathname();

  return (
    <div className={`flex flex-col gap-10 justify-between fixed lg:left-0 top-0 w-[350px] box-border bg-primaryColor p-7 overflow-auto h-[100vh] transition-all duration-700 ${isSidebarOpen ? 'left-0' : 'left-[-350px]'} z-40`}>
        <div className="flex flex-col gap-10">
          <div className="flex items-center w-full justify-between">
            <span className="uppercase text-white font-bold text-[36px]">Logo</span>
            <svg onClick={closeSidebar} className="lg:hidden" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8072 1.19507L1.52148 23.4808" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.52148 1.19507L23.8072 23.4808" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-primaryTint3 uppercase text-[12px] tracking-normal font-bold">Features</span>
              <div className="flex flex-col gap-2 w-full">
                <SidebarItem
                  featureName="File To .md"
                  icon={fileToMd}
                  bgColor="red-gradient"
                />
                <SidebarItem
                  featureName="Summary From .md"
                  icon={MdToSummary}
                  bgColor="blue-gradient"
                />
                <SidebarItem
                  featureName="Tasks from .md"
                  icon={TasksFromMd}
                  bgColor="green-gradient"
                />
                <SidebarItem
                  featureName="AI Check Grammar"
                  icon={AiCheckGrammar}
                  bgColor="lime-gradient"
                />
                <SidebarItem
                  featureName="Text to speech"
                  icon={TextToSpeech}
                  bgColor="orange-gradient"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primaryTint3 uppercase text-[12px] tracking-normal font-bold">Personal</span>
              <div className="flex flex-col gap-2 w-full">
                <SidebarItem
                  featureName="My Notes"
                  icon={Notes}
                  bgColor="bright-yellow-gradient"
                  isActive={pathname === "/dashboard/notes"}
                />
              </div>
            </div>
          </div>
        </div>
        <Link href="" className="button special no-underline mt-10">Upgrade your plan</Link>
    </div>
  )
}

export default Sidebar