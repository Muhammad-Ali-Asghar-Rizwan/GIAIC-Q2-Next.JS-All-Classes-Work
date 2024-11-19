export default function Home() {
  return (
       <div className="grid grid-rows-[75px_290px_200px_69px]  gap-2 w-[80%] m-auto text-center text-[10px]  md:text-[30px] font-bold grid-cols-3">
        <div className="bg-purple-300 col-span-3 border-2 border-black">Header</div>
        <div className="bg-green-300 row-span-2 border-2 border-black">SideBar</div>
        <div className="bg-blue-300 col-span-2 border-2 border-black">Content 1</div>
        <div className="bg-yellow-300 border-2 border-black">Content 2</div>
        <div className="bg-orange-300 border-2 border-black">Content 3</div>
        <div className="bg-pink-300 col-span-3 border-2 border-black">Footer</div>
       </div>
  );
}
