'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    return (
        <div>
            <div className="px-[2vw] h-[15%] items-center flex !justify-end">
                <div className="flex items-center p-[2vw]">
                    <span className="text-primary text-sm px-2 py-1 border-2 rounded-3xl border-primary">English <Icon icon="grommet-icons:down" className="inline-block mb-1" /></span>
                    <div className="relative w-8 bg-primary rounded-full ml-2 cursor-pointer flex justify-center items-center h-8"><Icon icon="mdi:bell-outline" className="text-black text-2xl" /></div>
                    <div className="relative w-8 bg-primary rounded-full ml-1 cursor-pointer flex justify-center items-center h-8"><Icon icon="pepicons-pop:headphone" className="text-black text-2xl " /></div>
                    <div></div>
                </div>
            </div>
            <div >
                <Image alt="logo" src='/logo.png' width={205} height={110} className='mx-auto my-8'></Image>
            </div>
            <form className='overflow-hidden w-[75%] pt-4 mx-auto '>
                <div className='overflow-hidden mb-8'>
                    <div className='font-bold text-lg text-white mb-1'>Account</div>
                    <input type="userName" className='rounded-[32px] w-full h-[48px] text-lg items-center px-8 text-black' placeholder='Account' />
                </div>
                <div className='overflow-hidden mb-8'>
                    <div className='font-bold text-lg text-white mb-1'>Login Password</div>
                    <input type="userName" className='rounded-[32px] w-full h-[48px] text-lg text-black items-center px-8' placeholder='Password' />
                </div>
                <div onClick={() => router.push('/')} className='overflow-hidden w-full rounded-[32px] items-center flex justify-center font-bold text-white text-lg bg-primary h-12 my-12' >
                    Login
                </div>
            </form>
            <div className='text-primary mx-auto w-full text-center text-lg' onClick={() => router.push('/')}>
                Go to homepage
            </div>
        </div>
    )
}

export default Login