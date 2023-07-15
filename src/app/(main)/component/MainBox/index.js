'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const MainBox = () => {
    return (
        <div className='bg-black pb-4 mb-2 text-white '>
            <div className='h-48 flex  w-screen lg:w-96 bg-cover bg-no-repeat relative mx-auto' style={{ backgroundImage: "url('/baner_main.png')" }}>
                <div className='flex flex-col m-0 pt-[15%] w-full'>

                    <p className='m-0  text-left font-medium pl-[10%] text-lg'>Total Balance</p>
                    <div className='m-0 pt-[3%] text-left font-bold pl-[10%] text-4xl flex'>
                        0.00
                        <div className='text-sm ml-2 items-center leading-10'>
                            TRX
                        </div>
                    </div>
                </div>
                <div className='absolute w-[35%] h-[55%] bottom-12 inline-block overflow-hidden right-4 '>
                    <div className='inline-block overflow-hidden relative'>
                        <Image alt={'image'} src='/image_thungvang.png' width={136} height={136} />
                    </div>
                </div>
            </div>
            <div className='px-3 relative w-[90%]  h-12 rounded-3xl bg-dark box-border mt-6 mx-auto flex items-center'>
                <Icon icon="game-icons:speaker" className='text-xl' />
                <div className='relative flex flex-1 items-center h-full overflow-hidden'>
                    <div className='absolute whitespace-nowrap ease-linear  '>
                        <marquee scrollamount={10}>
                            Registered users donate 38000TRX as pledged equity A deposit of 20TRX is required to activate the account, and a deposit of 100TRX is recommended for investment Please bookmark the official website to avoid being deceived Registered users donate 38000TRX as pledged equity A deposit of 20TRX is required to activate the account, and a deposit of 100TRX is recommended for investment Please bookmark the official website to avoid being deceivedRegistered users donate 38000TRX as pledged equity A deposit of 20TRX is required to activate the account, and a deposit of 100TRX is recommended for investment Please bookmark the official website to avoid being deceivedRegistered users donate 38000TRX as pledged equity A deposit of 20TRX is required to activate the account, and a deposit of 100TRX is recommended for investment Please bookmark the official website to avoid being deceivedRegistered users donate 38000TRX as pledged equity A deposit of 20TRX is required to activate the account, and a deposit of 100TRX is recommended for investment Please bookmark the official website to avoid being deceived
                        </marquee>

                    </div>
                </div>
            </div>
            <div className='flex flex-wrap w-full px-8  box-border mt-12'>
                <div className=' mb-6 cursor-pointer w-1/3'>
                    <div className='block overflow-hidden relative bg-[#292929] rounded-full h-20 w-20 mx-auto'>
                        <Icon icon="solar:shield-bold" className='text-primary text-5xl mx-auto w-full  mt-4' />
                    </div>
                    <div className='text-center cursor-pointer mt-2'>
                        Deposit
                    </div>
                </div>
                <div className='mb-6 cursor-pointer w-1/3'>
                    <div className='block overflow-hidden relative bg-[#292929] rounded-full h-20 w-20 mx-auto'>
                        <Icon icon="solar:shield-bold" className='text-primary text-5xl mx-auto w-full  mt-4' />
                    </div>
                    <div className='text-center cursor-pointer mt-2'>
                        Deposit
                    </div>
                </div>
                <div className='mb-6 cursor-pointer w-1/3'>
                    <div className='block overflow-hidden relative bg-[#292929] rounded-full h-20 w-20 mx-auto'>
                        <Icon icon="solar:shield-bold" className='text-primary text-5xl mx-auto w-full  mt-4' />
                    </div>
                    <div className='text-center cursor-pointer mt-2'>
                        Deposit
                    </div>
                </div>
                <div className=' mb-6 cursor-pointer w-1/3'>
                    <div className='block overflow-hidden relative bg-[#292929] rounded-full h-20 w-20 mx-auto'>
                        <Icon icon="solar:shield-bold" className='text-primary text-5xl mx-auto w-full  mt-4' />
                    </div>
                    <div className='text-center cursor-pointer mt-2'>
                        Deposit
                    </div>
                </div>
                <div className='mb-6  cursor-pointer w-1/3'>
                    <div className='block overflow-hidden relative bg-[#292929] rounded-full h-20 w-20 mx-auto'>
                        <Icon icon="solar:shield-bold" className='text-primary text-5xl mx-auto w-full  mt-4' />
                    </div>
                    <div className='text-center cursor-pointer mt-2'>
                        Deposit
                    </div>
                </div>
                <div className='mb-6 cursor-pointer w-1/3'>
                    <div className='block overflow-hidden relative bg-[#292929] rounded-full h-20 w-20 mx-auto'>
                        <Icon icon="solar:shield-bold" className='text-primary text-5xl mx-auto w-full  mt-4' />
                    </div>
                    <div className='text-center cursor-pointer mt-2'>
                        Deposit
                    </div>
                </div>



            </div>
        </div>
    )
}

export default MainBox