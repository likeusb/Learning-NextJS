"use client";

import Image from "next/image"
import logoSvg from "../../public/logo.svg"
import sun from "../../public/SVGs/sun.svg"
import moon from "../../public/SVGs/moon.svg"
import { useState } from "react";


export default function NewsletterPage() {
    const [formSubmitted, setFormSubmitted] = useState(false)

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
        <main className="flex flex-1 justify-center items-center">
            { formSubmitted ? <SuccessMessage/> : <NewsletterForm/> }
        </main>
    </div>
    );
}

export function SuccessMessage() {
    return (
        <h1>Success</h1>
    );
}
export function NewsletterForm() {
    return (
        <div className="inline-block items-center">
            <h2>Subscribe to the newsletter</h2>
            <form action="" className="flex flex-col items-center gap-[10px] grow mt-[10px]">
                <input type="text" placeholder="Enter your email here..." className="w-full outline flex text-center rounded-md"/>
                <button type="button" className="hover:text-green-500 duration-100 hover:cursor-pointer" >Subscribe</button>
            </form>
        </div>
    );
}