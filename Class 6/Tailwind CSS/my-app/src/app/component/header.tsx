import Image from "next/image"

import Link from "next/link"

import logo from "../../app/Image/logo.png"

const Navber= () => {
  return (
    <nav className="fixed ">
    <ul className="flex items-center justify-end  w-screen h-20 bg-sky-800 text-white">
      <Image src={logo} alt="" width={95} className="mt-20"/>
      <h1 className="mr-11 font-bold text-[19px] text-gray-300">Tuition Free Education Program on Latest Technologies</h1>
      <li className="mr-16"><Link href="/">Home</Link></li>
      <li className="mr-16"><Link href="/">Apply</Link></li>
      <li className="mr-16"><Link href="/">Job</Link></li>
      <li className="mr-16"><Link href="/">Result</Link></li>
      <li className="mr-16"><Link href="/">Couses</Link></li>
      
    </ul>
    
    </nav>
  )
}

export default Navber