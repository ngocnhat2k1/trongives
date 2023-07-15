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
                            1、Registered users donate 38000TRX as pledged equity A deposit of 20TRX is required to activate the account, and a deposit of 100TRX is recommended for investment Please bookmark the official website https://tron.gives vip1 line https://trong.uno vip2 line https://trong.ink [Basic investment] Deposit to the basic account and automatically join the contract for 6 months [The contract period will take effect from the time of the first deposit]. The basic account has mining income every day, and can receive 9%-36% of the accumulated investment amount every day. 【1】 Cumulative deposit of 20-1000 trx, automatic upgrade to VIP1, daily withdrawal of 9% 【2】Accumulated deposit of 1001-10000 trx, automatic upgrade to VIP2, daily withdrawal of 10% 【3】 Cumulative deposit of 10001-30000 trx, automatic upgrade to VIP3, daily withdrawal of 11% 【4】 Cumulative deposit of 30001-60000 trx, automatic upgrade to VIP4, daily withdrawal of 13% 【5】 Cumulative deposit of 60001-100000 trx, automatic upgrade to VIP5, daily withdrawal of 15% 【6】Accumulated deposit of 100001-300000 trx, automatic upgrade to VIP6, daily withdrawal of 18% 【7】 Cumulative deposit of 300001-600000 trx, automatic upgrade to VIP7, daily withdrawal of 21% 【8】 Cumulative deposit 600001-1000000 trx, automatic upgrade to VIP8, daily withdrawal 25% 【9】Cumulative deposit of 1,000,001-5,000,000 trx, automatic upgrade to VIP9, daily withdrawal of 30% 【10】Cumulative deposit 5000001-9999999trx, automatic upgrade to VIP10, daily withdrawal 36% The settlement time of our platform system is: the time of the user&quot;s first purchase, 24 hours later. [For example: the first purchase time is 18:00, and the profit will be obtained at 18:00 the next day] The income will not be automatically deposited into the account, you need to click &quot;Mining&quot; every day to actively receive the income. The recommended minimum withdrawal is 10TRX Automatic upgrade of VIP level 【The system will determine your total accumulated deposits and automatically upgrade you to the appropriate level】 For example: Recharge 201TRX for the first time, recharge 800TRX for the second time, accumulatively recharge 1001TRX, the system will automatically upgrade to VIP2, and you will have 10% daily income of VIP2 level    2、Official website: https://tron.gives Official Telegram Channel: https://t.me/trongives Official email: tronglves9898@gmail.com Official Telegram: https://t.me/TRONGIVES02
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