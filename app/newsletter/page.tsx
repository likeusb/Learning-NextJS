"use client";

import Form from 'next/form'
import { Header } from "../layout"
import { Footer } from "../layout"
import { useState } from "react";

export default function NewsletterPage() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData,setFormData] = useState({email:""})

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-col flex-1 justify-center items-center">
                { formSubmitted ? <SuccessMessage setFormSubmitted={setFormSubmitted} setFormData={setFormData}/> : <NewsletterForm setFormSubmitted={setFormSubmitted} setFormData={setFormData}/> }
            </main>
            <Footer/>
        </div>
    );
}

export function SuccessMessage({setFormSubmitted, setFormData}: {setFormSubmitted: (formSubmitted: boolean) => void, setFormData: (formData: {email: string}) => void}) {
    function setInputValue() {
        setFormData({email: ""});
    }

    return (
        <div className="flex flex-col items-center">
            <h3>Success!</h3>
            <h4>Subscribed by mistake?</h4>
            <button type="button" className="hover:text-green-500 duration-100 hover:cursor-pointer" onClick={e => { setInputValue(); setFormSubmitted(false) }}><h4>Unsubscribe</h4></button>
        </div>
    );
}

export function NewsletterForm({setFormSubmitted, setFormData}: {setFormSubmitted: (formSubmitted: boolean) => void, setFormData: (formData: {email: string}) => void}) {
    function readInputValue() {
        setFormData({email: (document.getElementById("email") as HTMLInputElement).value});
    }

    return (
        <div className="inline-block items-center">
            <h3>Subscribe to the newsletter</h3>
            <Form action="" className="flex flex-col items-center gap-[20px] grow mt-[10px]">
                <input type="text" id="email" placeholder="Enter your email here..." className="w-full outline flex text-center rounded-md text-2xl font-normal"/>
                <button type="button" className="hover:text-green-500 duration-100 hover:cursor-pointer" onClick={e => { readInputValue(); setFormSubmitted(true) }}><h4>Subscribe</h4></button>
            </Form>
        </div>
    );
}