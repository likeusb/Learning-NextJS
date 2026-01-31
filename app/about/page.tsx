import Image from "next/image"
import { Header } from "../layout"
import { Footer } from "../layout"
import markdownit from 'markdown-it'
import meImg from "../../public/img/portrait.jpg"

const briefIntro = markdownit().render(`
### A bit about me
I am an 18 year old student interested in photography, aviation, gaming, and coding. I like to share my passion for photography and aviation publically, as you can see with this site. I don't really have much else to share, to be honest. \n
    `);

const myGear1 = markdownit().render(`
#### My gear
### Camera gear:\n
Canon EOS 700D\n
Canon EF-S 55-250 F4-5.6 IS II\n
Canon EF-S 18-55 F3.5-5.6 IS STM
`);

const myGear2 = markdownit().render(`
### Computer gear:
Intel i5-13400F\n
MSI B660M-A Pro DDR4\n
2x16GB DDR4 G.Skill F-4 3200 CL16\n
1TB Samsung 990 Pro NVMe\n
1TB ADATA Legend 960 Pro NVMe\n
512GB Western Digital SATA SSD\n
1TB Western Digital HDD\n
MSI Ventus 2X RTX 3060 12G\n
Corsair RM850x
`);

const myGear3 = markdownit().render(`
### PC Peripherals:
Keyboard: Corsair STRAFE RGB Mk.2\n
Mouse: Steelseries Rival 3 Gen 1\n
Headset: Steelseries Arctis Nova 7 Wireless\n
Monitors: Samsung SyncMaster 2343, Xiaomi A24i, LG IPS LED 23MP55
`);

const myGear4 = markdownit().render(`
### Other gear:
Laptop: HP EliteBooks 645 G8\n
Phones: Xiaomi 15 Ultra (main), Xiaomi 13T Pro (backup), Redmi Note 10 Pro (Custom ROM testbench)\n
Earphones: Redmi Buds 5 Pro\n
Smartwatch: Xiaomi Smart Band 8 Pro
`);

const Credits = markdownit().render(`
### Credits
Icons8 for the SVG icons used in the settings and for the theme toggle icon\n
Google Fonts for providing the font and certain SVG Icons
`);

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1 flex flex-col gap-[30px] pl-[20%] pr-[20%] pt-[100px] pb-[100px] gap-[30px]">
                <div className="flex gap-[30px]">
                    <Image src={meImg} alt="A photo of me pointing a DSLR at the camera" className="h-[650px] rounded-[20px]"/>
                    <div dangerouslySetInnerHTML={{ __html: briefIntro }} className="flex flex-col justify-center"/>
                </div>
                <div dangerouslySetInnerHTML={{ __html: myGear1 }}/>
                <div dangerouslySetInnerHTML={{ __html: myGear2 }}/>
                <div dangerouslySetInnerHTML={{ __html: myGear3 }}/>
                <div dangerouslySetInnerHTML={{ __html: myGear4 }}/>
                <div dangerouslySetInnerHTML={{ __html: Credits }} className="mt-[50px]"/>
            </main>
            <Footer/>
        </div>
    );
}