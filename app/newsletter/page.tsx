"use client";

import Image from "next/image"
import Form from 'next/form'
import logoSvg from "../../public/logo.svg"
import sun from "../../public/SVGs/sun.svg"
import moon from "../../public/SVGs/moon.svg"
import { useState } from "react";

export default function NewsletterPage() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData,setFormData] = useState({email:""})
    function readInputValue() {
        console.log(formData.email);
    }

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
        <main className="flex flex-col flex-1 justify-center items-center">
            { formSubmitted ? <SuccessMessage setFormSubmitted={setFormSubmitted} setFormData={setFormData}/> : <NewsletterForm setFormSubmitted={setFormSubmitted} setFormData={setFormData}/> }
        </main>
    </div>
    );
}

export function SuccessMessage({setFormSubmitted, setFormData}: {setFormSubmitted: (formSubmitted: boolean) => void, setFormData: (formData: {email: string}) => void}) {
    function setInputValue() {
        setFormData({email: ""});
    }

    return (
        <div className="flex flex-col items-center">
            <h1>Success!</h1>
            <h2>Subscribed by mistake?</h2>
            <button type="button" className="hover:text-green-500 duration-100 hover:cursor-pointer" onClick={e => { setInputValue(); setFormSubmitted(false) }}><h2>Unsubscribe</h2></button>
        </div>
    );
}

export function NewsletterForm({setFormSubmitted, setFormData}: {setFormSubmitted: (formSubmitted: boolean) => void, setFormData: (formData: {email: string}) => void}) {
    function readInputValue() {
        setFormData({email: (document.getElementById("email") as HTMLInputElement).value});
    }

    return (
        <div className="inline-block items-center">
            <h1>Subscribe to the newsletter</h1>
            <Form action="" className="flex flex-col items-center gap-[20px] grow mt-[10px]">
                <input type="text" id="email" placeholder="Enter your email here..." className="w-full outline flex text-center rounded-md text-2xl font-normal"/>
                <button type="button" className="hover:text-green-500 duration-100 hover:cursor-pointer" onClick={e => { readInputValue(); setFormSubmitted(true) }}><h2>Subscribe</h2></button>
            </Form>
        </div>
    );
}