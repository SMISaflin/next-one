import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [ukuran, setUkuran] = useState(400)
  return (
   <div className="">
    <h1 className="text-6xl">Donor darah</h1>
    <img src="/foto.jpg" alt="" width={ukuran} />
    <br />
    {ukuran}
    <br />
    <button className="bg-blue-400 rounded-2xl h-16 w-32" onClick={() => {setUkuran(ukuran + 10)}}>Tambah ukuran</button>
    <button className="bg-blue-400 rounded-2xl h-16 w-32" onClick={() => {setUkuran(ukuran - 10)}}>Kurang ukuran</button>
   </div>
  );
}
