import Image from 'next/image'
import MainBox from './component/MainBox'
import Card from './component/Card/Card'
import Investing from './component/Investing'
import InstantQuotes from './component/InstantQuotes'
import ProfitWithdrawal from './component/ProfitWithdrawal'
import Profile from './component/Profile'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between z-10 w-full text-sm pb-32">

      <MainBox />
      <Card></Card>
      <Card></Card>
      <Investing />
      <hr width="50%"
        color="#252525"
        align="right"
        size="5px" className='my-8 opacity-30'></hr>
      <Profile />
      <InstantQuotes />
      <div className='bg-[#4a4949] rounded-3xl py-2 px-1 w-[100%] my-8'>
        <h3 className='text-primary text-2xl font-bold text-center my-4'>Help center</h3>
        <div>
          <ul>
            <li className='py-6 leading-6 px-6 cursor-pointer'>
              <a href="https://trong.ink/pc#/help/1 " className='flex justify-between '>TRONGIVES
                <div className='inline-block px-2 opacity-70 cursor-pointer'>
                  &gt;
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ProfitWithdrawal />

    </main>
  )
}
