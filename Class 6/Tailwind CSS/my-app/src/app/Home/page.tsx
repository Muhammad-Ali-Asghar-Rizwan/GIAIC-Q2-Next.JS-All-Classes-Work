import React from 'react'
import pic from "../Image/cover.1d863e39.png"
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      
      <div className='pt-40 pl-14 bg-slate-200 h-[52rem]'>
        <h1 className='font-bold text-[4rem] text-sky-800 '>Governor Sindh </h1>
        <h1 className='text-[2.5rem]  text-sky-800'>Kamran Khan Tessori</h1>
        <h3 className='text-[2.5rem] font-bold mt-2 text-sky-500 w-[27rem]'>Certified Cloud
Applied Generative AI
Engineer (GenEng)</h3>

         <h4 className='text-[24px] font-semibold mt-2 text-sky-800'>Earn up to $5,000 / month</h4>
         <h3 className='text-[27px] font-semibold mt-3 text-sky-800 w-[30rem]'>Now admissions are open in Hyderabad</h3>

         <div className='mt-9 flex gap-20'>
          <button className='h-14 text-[20px] text-white font-bold w-48 bg-sky-800 rounded-lg hover:relative top-1'>APPLY NOW</button>
          <h1 className='text-[35px] font-bold text-sky-800'>562,143</h1>
          <h1 className='text-sky-800 mt-10 relative right-[13.8rem]'>Accepted Applications</h1>
        
         </div>
         <div className='mt-[-600px] flex items-end justify-end'>
        <Image src={pic} alt='' width={425}  />
        </div>
      </div>
    </div>
  )
}

export default Home
