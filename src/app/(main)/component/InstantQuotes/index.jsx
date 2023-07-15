"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const InstantQuotes = () => {
    const [tab, setTab] = useState("BINACE");

    const [listData, setListData] = useState();
    const fectchData = async () => {
        await axios
            .get(`https://criptial.onrender.com/top/1/10`)
            .then((response) => {
                setListData(response.data.data);
                console.log(response.data.data);
            });
    };

    useEffect(() => {
        fectchData();
        const id = setInterval(() => {
            fectchData();
        }, 30000);
        return () => clearInterval(id);
    }, []);
    console.log("đây la", listData);
    return (
        <div className='w-full bg-dark text-center rounded-3xl'>
            <div className='my-4 text-2xl text-primary font-bold'>Instant Quotes</div>
            <div className=''>
                <div className='h-auto p-4 whitespace-nowrap flex justify-center'>
                    <div
                        className={`mx-3 ${tab == "BINACE"
                                ? "text-primary border-b-2 border-primary scale-110 transition-all duration-150"
                                : "text-white"
                            }`}
                        onClick={() => setTab("BINACE")}>
                        BINACE
                    </div>
                    <div
                        className={`mx-3 ${tab == "OKX"
                                ? "text-primary border-b-2 border-primary scale-110 transition-all duration-150"
                                : "text-white"
                            }`}
                        onClick={() => setTab("OKX")}>
                        OKX
                    </div>
                    <div
                        className={`mx-3 ${tab == "HOUBI"
                                ? "text-primary border-b-2 border-primary scale-110 transition-all duration-150"
                                : "text-white"
                            }`}
                        onClick={() => setTab("HOUBI")}>
                        HOUBI
                    </div>
                    <div
                        className={`mx-3 ${tab == "COINBASE"
                                ? "text-primary border-b-2 border-primary scale-110 transition-all duration-150"
                                : "text-white"
                            }`}
                        onClick={() => setTab("COINBASE")}>
                        COINBASE
                    </div>
                </div>
                <ul>
                    {listData?.map((coin, index) => (
                        <li
                            key={index}
                            className='flex justify-between items-center h-auto px-4 my-6 w-full py-2 align-middle'>
                            <div className='w-10 h-auto rounded-full'>
                                <Image
                                    alt='img'
                                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                                    height={30}
                                    width={30}></Image>
                            </div>
                            <div className='w-[50%] text-left ml-2'>
                                <span className='block mb-1 text-base'>{coin.name} / USDT</span>
                                <span className='text-xs text-[#999]'>1:389807.702182 TRX</span>
                            </div>
                            <div
                                className={`text-[#dd345b] mr-2 ${coin.quote.USD.percent_change_24h > 0
                                        ? "text-[#03ad91]"
                                        : "text-[#dd345b]"
                                    }`}>
                                {coin.quote.USD.price.toFixed(4)}
                            </div>
                            <div
                                className={`block !w-20 text-white text-sm py-2 px-3 rounded-md ${coin.quote.USD.percent_change_24h > 0
                                        ? "bg-[#03ad91]"
                                        : "bg-[#dd345b]"
                                    }`}>
                                {coin.quote.USD.percent_change_24h > 0 ? "+" : ""}
                                {coin.quote.USD.percent_change_24h.toFixed(2)}%
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InstantQuotes;
