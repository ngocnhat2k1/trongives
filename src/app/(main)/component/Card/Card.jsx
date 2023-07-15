import Image from 'next/image'
import React from 'react'
import Bg from '../../../../../public/card.png'

const Card = () => {
    return (
        <div className='w-[90%]  h-24 mx-auto mb-4 bg-dark rounded-2xl flex justify-start items-center'>
            <Image alt='img' src={Bg} width={90} height={50} />
            <div>
                <div className='font-bold text-sm'>
                    Wallet
                    <div className='inline text-xs ml-2 text-[#a9acb2]'>Accout</div>
                </div>
                <div className='mt-2 text-primary font-bold text-[16px]'>0.00 <div className='inline text-xs text-white'>TRX</div> ≈ $ 0.00</div>
            </div>

        </div>
    )
}

export default Card