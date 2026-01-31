import Image from "next/image"
import slr from "../public/SLR.jpg"
import { Header } from "./layout"
import { Footer } from "./layout"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="grid grid-cols-2 p-[100px] items-center justify-items-center flex-1">
        <h1><span className="text-green-400">Great</span> photos.<br/><span className="text-green-400">Well-coded</span> websites</h1>
        <Image src={slr} alt="A soviet-era film camera on a shelf with a rainbow cast on it" className="rounded-4xl"/>
      </main>
      <Footer/>
    </div>
  );
}