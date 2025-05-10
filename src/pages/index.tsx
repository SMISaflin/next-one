import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

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
    <header>
      <nav className="flex h-96 w-52 bg-blue-300 border items-center p-2 flex-col">
        <img src="/foto.jpg" alt=""  className="h-14 w-14 mt-4"/>
        <ul className=" text-violet-950 gap-3 mt-5">
          <li><Link href={"/"}>Dashboard</Link></li>
          <li><Link href={"anggota"}>Data Anggota</Link></li>
          <li><Link href={"kegiatan"}>Data kegiatan</Link></li>
          <li><Link href={"artikel"}>Data Artikel</Link></li>
          <li><Link href={"galeri"}>Data Galeri</Link></li>
          <li><Link href={"pengaturan"}>Pengaturan</Link></li>
          <li><Link href={"login"}>Logout</Link></li>
        </ul>
      </nav>
    </header>
   </div>
  );
}
