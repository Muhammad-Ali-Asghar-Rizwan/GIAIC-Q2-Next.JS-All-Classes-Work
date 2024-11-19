import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="MainContainer bg-white  w-[73rem] min-h-[45rem]   m-[0px_5%] grid grid-cols-[22%_49%_24.3%] gap-[1rem_2rem] grid-rows-[5rem_23rem_minmax(14rem,1fr)]">
        <div className='box box1 rounded-lg  border-2 border-black text-[2rem]  row-[1/3] relative z-[10] overflow-hidden'>
        <div className="box1-abs w-[100%] h-[13%] bg-slate-400  absolute z-[-2] "></div>
        <div className="box1-name text-xs flex flex-col items-center  mt-5 border-b-[1px]  border-[#0000008e]">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={200}
            height={200}
            className="box1-image w-20 h-20 rounded-[50%] border-[2.3px] border-white"
          />
          <h1 className="text-[17px] font-bold mt-5">Ali Asghar M.Rizwan</h1>
          <p className="text-center w-[13rem] mt-3 text-gray-600">STUDENT OF GOVERNOR SINDH INITIATIVE HTML/CSS/JAVASCRIPT/ TYPESCRIPT/NEXT.JS/TAILWIND CSS/GENERATIVE AI /META/WEB DEVELOPMENT/SALES AND LEAD GENERATION</p>
          <div className="border-b-[1px]  border-[#00000048] mt-5"></div>
        </div>
        <div className="box1-connection text-[13px] text-gray-700 mx-3 mt-4">
          <div className="connection-box1 flex justify-between">
            <p>Profile viewers</p>
            <p className="text-[#16407f] font-semibold">151</p>
          </div>
          <div className="connection-box2 flex justify-between mt-2">
            <p>Post impressions</p>
            <p className="text-[#163d77] font-semibold">660</p>
          </div>
        </div>
        <div className="border-b-[1px]  border-[#00000048] mt-5"></div>
        <div className="box1-upgrade text-gray-600 text-[12px] mx-3 mt-3">
          <p>Refine your sales pipeline          </p>
          <h1 className="text-[14px] font-bold text-black mt-2">Sales Nav for PKR0, try now</h1>
        </div>
        <div className="border-b-[1px]  border-[#00000048] mt-5"></div>
        <div className="box1-saved text-[14px] font-bold text-black mx-3">
        <h1>Saved items</h1>
        </div>
        </div>
        <div className='box box2 rounded-lg border-2 border-black text-[2rem]  '>2</div>
        <div className='box box3 rounded-lg border-2 border-black text-2rem]   col-[3] row-[1/3]'>3</div>
        <div className='box box4 rounded-lg border-2 min-h-[300rem] border-black text-[2rem]  row-[2/4]'>
        <div className="h-[30rem] w-[100%]  bg-yellow-400 border-2 border-red-600 mb-5 rounded-lg  one"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  tow"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  three"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  four"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  five"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  six"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  seven"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  eight"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  nine"></div>
        <div className="h-[30rem] w-[100%]  bg-yellow-500 border-2 border-red-600 mb-5 rounded-lg  ten"></div>
        </div>
        <div className='box box5 rounded-lg border-2 bg-opacity-10 h-[13rem] border-black text-[2rem]  '>5</div>
        <div className='box box6 rounded-lg border-2 bg-opacity-10 h-[25rem] sticky top-5 border-black text-[2rem]  '>6</div>
      </div>
    </div>
  );
};

export default HomePage;
