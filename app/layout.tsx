import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image"
import logoSvg from "../public/logo.svg"
import sun from "../public/SVGs/sun.svg"
import moon from "../public/SVGs/moon.svg"

export const metadata: Metadata = {
  title: 'Linas Photography',
  description: 'Great photos. Well-coded websites.',
  twitter: {
    title: 'Linas Photography',
    description: 'Great photos. Well-coded websites.',
    creator: '@likeusb',
    images: ['../public/img/SLR.jpg'],
  },
  openGraph: {
    title: 'Linas Photography',
    description: 'Great photos. Well-coded websites.',
    images: [
      {
        url: '../public/img/SLR.jpg',
        width: 1920,
        height: 1080,
      },
    ],
  },
}

function Header() {
  return (
    <nav className="flex items-center h-[70px] w-full bg-neutral-800">
      <Image src={logoSvg} alt="" className="flex justify-center items-center h-[70px] object-contain basis-0 grow"/>
      <ul className="flex justify-center flex-wrap gap-x-[25px]">
        <li><h4><a href="./">Home</a></h4></li>
        <li><h4><a href="">Gallery</a></h4></li>
        <li><h4><a href="./about">About</a></h4></li>
        <li><h4><a href="">Contacts</a></h4></li>
        <li><h4><a href="">Articles</a></h4></li>
      </ul>
      <div className="flex justify-center items-center h-[70px] w-64 basis-0 grow">
        <Image src={sun} alt="" className="h-[70px] w-auto invert hidden dark:block"/>
        <Image src={moon} alt="" className="h-[70px] w-auto dark:hidden"/>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center items-center h-[70px]">
      <h4>Also check out my Github <a href="https://github.com/likeusb">here</a></h4>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
