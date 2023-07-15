import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <div className='w-full bg-dark text-center rounded-3xl my-10'>
            <div className='font-bold text-center text-base my-1 mt-10'>Join to be a TRON GIVES Millionaire</div>
            <div className='w-[75%] lg:w-[60%] text-center mx-auto text-primary leading-5 text-[10px]'>Use the latest mining machines and Defi technology to ensure that all users get the most TRX income.</div>
            <div className='w-[90%] h-52 lg:h-80 my-4 overflow-hidden mx-auto '>
                <Image alt='img' src={'/anh1.png'} fill={true} className='!relative mx-auto'></Image>
            </div>
            <div className='w-full my-8'>

                <div className='w-[40%] h-12 bg-primary rounded-3xl text-white text-center items-center my-0 mx-auto'>
                    <p className='text-lg py-2'>Details</p>
                </div>
            </div>


        </div>
    )
}

export default Profile