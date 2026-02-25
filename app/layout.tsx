import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image"
import logoSvg from "../public/logo.svg"
import sun from "../public/SVGs/sun.svg"
import moon from "../public/SVGs/moon.svg"
import axios from "axios";

let VATSIMData : string;
// let VATSIMStatus : boolean;
// let VATSIMPilotOrATC : boolean; // true if pilot, false if ATC
// let VATSIMData = '1880962,FDX298,pilot,,,54.02542,12.02494,0,0,0,0,0,0,0,0,\n';
// Array format: 0 - CID, 1 - Callsign, 2 - Facility type (pilot or ATC), 3 - Frequency (empty for pilots), 4 - Visual range (empty for pilots), 5 - Latitude, 6 - Longitude, 7-14 - Secondary positions (four or more lat/lon pairs, if set by the controller), Trailing comma
// raw stringified JSON: 1880962,FDX298,pilot,,,54.02542,12.02494,0,0,0,0,0,0,0,0,\n
// array if offline: [""]
// array if online: ["1880962", "FDX298", "pilot", "", "", "54.02542", "12.02494", "0", "0", "0", "0", "0", "0", "0", "0"]

let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://slurper.vatsim.net/users/info?cid=1880962',
  headers: {
    'Accept': 'text/plain'
  }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  VATSIMData = JSON.stringify(response.data);
})
.catch((error) => {
  console.log(error);
});



export const metadata: Metadata = {
  metadataBase: new URL("https://likeusb.me"),
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
    <footer className="grid grid-cols-3 h-[70px]">
      <h4 className="col-2 flex justify-center items-center gap-3">Also check out my Github <a href="https://github.com/likeusb">here</a></h4>
      <div className="flex justify-center items-center col-3">
        <p>VATSIM Status: {VATSIMData}</p>
      </div>
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
