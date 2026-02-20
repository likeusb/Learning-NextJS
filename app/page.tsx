'use client';

import Image from "next/image"
import slr from "../public/img/SLR.jpg"
import axios from "axios";
var cors = require('cors')



let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://slurper.vatsim.net/users/info?cid=1880962',
  headers: {
    'Accept': 'text/plain'
  }
};

async function getUser() {
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}

// axios(config)
// .then((response: any) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error: Error) => {
//   console.log(error);
// });



export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
      <main className="grid grid-cols-2 p-[100px] items-center justify-items-center flex-1">
        <h1><span className="text-green-400">Great</span> photos.<br/><span className="text-green-400">Well-coded</span> websites</h1>
        <Image src={slr} alt="A soviet-era film camera on a shelf with a rainbow cast on it" className="rounded-4xl"/>
        <button onClick={getUser}>Get User Info</button>
      </main>
    </div>
  );
}