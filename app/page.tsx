import Image from "next/image"
import logoSvg from "../public/logo.svg"
import sun from "../public/SVGs/sun.svg"
import moon from "../public/SVGs/moon.svg"
import slr from "../public/SLR.jpg"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center h-[70px] w-full bg-neutral-800">
        <Image src={logoSvg} alt="" className="flex justify-center items-center h-[70px] object-contain basis-0 grow"/>
        <ul className="flex justify-center flex-wrap gap-x-[25px]">
          <li className=""><h2>Home</h2></li>
          <li className=""><h2>Gallery</h2></li>
          <li className=""><h2>About</h2></li>
          <li className=""><h2>Contacts</h2></li>
          <li className=""><h2>Articles</h2></li>
        </ul>
        <div className="flex justify-center items-center h-[70px] w-64 basis-0 grow">
          <Image src={sun} alt="" className="h-[70px] w-auto invert hidden dark:block"/>
          <Image src={moon} alt="" className="h-[70px] w-auto dark:hidden"/>
        </div>
      </nav>
      <main className="grid grid-cols-2 p-[100px] items-center justify-items-center flex-1">
        <h1><span className="text-green-400">Great</span> photos.<br/><span className="text-green-400">Well-coded</span> websites</h1>
        <Image src={slr} alt="A soviet-era film camera on a shelf with a rainbow cast on it" className="rounded-4xl"/>
      </main>
    </div>
  );
}