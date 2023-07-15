"use client"

import Image from "next/image";
import React from "react";
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className="px-[4vw] h-[15%] items-center flex !justify-between">
            <div className="p-[2vw]">
                <Image alt="logo" src='/logo.png' width={105} height={55}></Image>
            </div>
            <div className="flex items-center p-[2vw]">
                <span className="text-primary text-sm px-2 py-1 border-2 rounded-3xl border-primary">English <Icon icon="grommet-icons:down" className="inline-block mb-1" /></span>
                <div className="relative w-8 bg-primary rounded-full ml-2 cursor-pointer flex justify-center items-center h-8"><Icon icon="mdi:bell-outline" className="text-black text-2xl" /></div>
                <div className="relative w-8 bg-primary rounded-full ml-1 cursor-pointer flex justify-center items-center h-8"><Icon icon="pepicons-pop:headphone" className="text-black text-2xl " /></div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;
