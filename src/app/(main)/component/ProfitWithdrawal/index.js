'use client'

import Image from 'next/image'
import React from 'react'

const ProfitWithdrawal = () => {

    return (
        <div className='h-[700px] lg:h[974px] w-[110%] bg-cover  bg-no-repeat' style={{ backgroundImage: "url('/Profitwithdrawal.png')" }}>
            <div className='h-[400px] lg:h-[545px] pt-8'>
                <h3 className='text-primary font-bold text-2xl text-center'>Profit withdrawal</h3>
                <div className='p-0 h-[350px] overflow-hidden'>
                    <div className='flex justify-between text-sm leading-5 my-6 mx-10 '>
                        <div className='text-[#999]'>
                            Account
                        </div>
                        <div className='text-[#999]'>
                            Repurchase
                        </div>
                    </div>
                    <ul>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                        <li className='flex lex justify-between text-sm mb-4 leading-5 mx-10 '>
                            <div>
                                05******29
                            </div>
                            <div>
                                3937.77 TRX
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center text-primary font-bold text-2xl  mt-24'>
                Global partners
            </div>
            <div className='grid grid-cols-3 gap-2 p-10'>
                <Image alt={'img'} src='/partners.png' height={100} width={150} />
                <Image alt={'img'} src='/partners2.png' height={100} width={150} />
                <Image alt={'img'} src='/partners3.png' height={100} width={150} />
                <Image alt={'img'} src='/partners3.png' height={100} width={150} />
                <Image alt={'img'} src='/partners2.png' height={100} width={150} />
                <Image alt={'img'} src='/partners.png' height={100} width={150} />
            </div>

        </div >
    )
}

export default ProfitWithdrawal