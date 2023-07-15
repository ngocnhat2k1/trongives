'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'

const NavBar = () => {
    const router = useRouter()
    return (
        <div className='flex justify-center'>

            <div className='bottom-10 flex  w-[90vw] lg:w-1/3 lg:h-[9vw] h-[25vw] items-center justify-center px-3 bg-cover fixed bg-no-repeat)]' style={{ backgroundImage: "url('/bg-navbar.png')" }}>
                <div className='flex justify-between w-[95%]'>

                    <div className='cursor-pointer items-center mt-10' onClick={() => { router.push('/login') }}>
                        <Icon icon="mdi:home" className='mx-auto text-3xl text-primary' />
                        <p className='text-xs text-primary' >Home</p>
                    </div>
                    <div className='cursor-pointer items-center mt-10' onClick={() => { router.push('/login') }}>
                        <Icon icon="zondicons:wallet" className='mx-auto text-3xl text-[#c6ccd3]' />
                        <p className='text-xs text-[#c6ccd3]'>Income</p>
                    </div>
                    <div className='cursor-pointer items-center mt-7 ' onClick={() => { router.push('/login') }}>
                        <Icon icon="bxl:unity" className='mx-auto text-3xl text-[#c6ccd3]' />
                        <p className='text-xs text-[#c6ccd3]' >Invest</p>
                    </div>
                    <div className='cursor-pointer items-center mt-10' onClick={() => { router.push('/login') }}>
                        <Icon icon="fluent:share-16-filled" className='mx-auto text-3xl text-[#c6ccd3]' />
                        <p className='text-xs text-[#c6ccd3]'>Share</p>
                    </div>
                    <div className='cursor-pointer items-center mt-10' onClick={() => { router.push('/login') }}>
                        <Icon icon="ion:person-sharp" className='mx-auto text-3xl text-[#c6ccd3]' />
                        <p className='text-xs text-[#c6ccd3]'>Mine</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default NavBar