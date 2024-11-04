
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex items-center justify-center  px-9  bg-pink-200 h-screen">
      <div className="w-1/2 flex flex-col gap-4 ">
        <h1 className="text-[35px] font-bold ">Welcome To Our Website</h1>
        <p className="md:w-[28rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          nesciunt delectus, quam eum harum consectetur exercitationem mollitia
          dignissimos suscipit dolor voluptatem molestias praesentium non
          officia repellendus maiores! Sequi, reprehenderit eius.
        </p>
        <button className="w-[200px] h-[50px] rounded-lg bg-black text-white">Contact US</button>
      </div>
      <div className="h-96 w-96 bg-fuchsia-700">
         <Image src="/image/pic.png" alt="user," width={800} height={800} className="w-96 h-96"/>
      </div>
    </div>
  );
}
