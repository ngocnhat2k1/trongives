import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Investing = () => {
    return (
        <div className='w-[90%] mx-auto '>
            <h3 className=' font-bold text-[24px] my-4 text-center'>Cyclical investing</h3>
            <div className='grid grid-cols-2 gap-4 '>
                <div className='cursor-pointer bg-dark rounded-2xl'>
                    <div className='p-[10px] rounded-md '>
                        <div className='w-full lg:h-[142px] h-[96px] rounded-md inline-block overflow-hidden relative'>
                            <Image alt={'image'} src={'/Investing1.jpg'} fill={true} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                        </div>
                        <div className='my-2 text-primary'>TRON 9-day traffic mining machine</div>
                        <div className='text-sm '>7.89-7.99%</div>
                        <div className='text-sm '>Cycle:9 day</div>
                    </div>
                </div>

                <div className='cursor-pointer bg-dark rounded-2xl'>
                    <div className='p-[10px] rounded-md '>
                        <div className='w-full lg:h-[142px] h-[96px] rounded-md inline-block overflow-hidden relative'>
                            <Image alt={'image'} src={'/Investing1.jpg'} fill={true} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                        </div>
                        <div className='my-2 text-primary'>TRON 9-day traffic mining machine</div>
                        <div className='text-sm '>7.89-7.99%</div>
                        <div className='text-sm '>Cycle:9 day</div>
                    </div>
                </div>
                <div className='cursor-pointer bg-dark rounded-2xl'>
                    <div className='p-[10px] rounded-md '>
                        <div className='w-full lg:h-[142px] h-[96px] rounded-md inline-block overflow-hidden relative'>
                            <Image alt={'image'} src={'/Investing1.jpg'} fill={true} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                        </div>
                        <div className='my-2 text-primary'>TRON 9-day traffic mining machine</div>
                        <div className='text-sm '>7.89-7.99%</div>
                        <div className='text-sm '>Cycle:9 day</div>
                    </div>
                </div>
                <div className='cursor-pointer bg-dark rounded-2xl'>
                    <div className='p-[10px] rounded-md '>
                        <div className='w-full lg:h-[142px] h-[96px] rounded-md inline-block overflow-hidden relative'>
                            <Image alt={'image'} src={'/Investing1.jpg'} fill={true} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                        </div>
                        <div className='my-2 text-primary'>TRON 9-day traffic mining machine</div>
                        <div className='text-sm '>7.89-7.99%</div>
                        <div className='text-sm '>Cycle:9 day</div>
                    </div>
                </div>
            </div>
            <div className=' mt-8 text-center'>
                <Link href={''} >{`View more >>`} </Link >
            </div>
        </div>
    )
}

export default Investing