import { Nav } from "@/components/Nav";
import left_array from "../../public/left_array.svg"
import right_array from "../../public/right_array.svg"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-black">
        <iframe 
          className="opacity-50 -z-10"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/CWbQ-VRzCPA?autoplay=1&mute=1&amp;controls=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"          
          allowFullScreen 
          frameBorder="0"
          title="YouTube video player"
        ></iframe>
      </div>

      

      <div className="relative z-10">
        <Nav color="white"/>

        
        <div className="fixed mt-[25rem] z-20">
            <Image
              src={left_array}
              alt=""
              className="fixed mt-3 left-10"
            />
            <p className="fixed text-white text-4xl left-[4rem] font-thin">1/10</p>
            <p className="fixed text-white text-4xl right-[4rem] font-thin">NEXT</p>

            <Image
              src={right_array}
              alt=""
              className="fixed mt-3 right-10"
            />

          </div>
          <h1 className="fixed w-full text-center text-white bottom-36 text-5xl font-bold">단체합방</h1>
          <h1 className="fixed w-full text-center text-white bottom-24 text-2xl font-semibold">설날 폭탄돌리기</h1>

          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white w-44 rotate-90"></div>

        <div className="fixed bottom-10 text-white w-full">
          <Link href="/about"><p className="float-left ml-12">ABOUT US</p></Link>
          <p className="float-left ml-12 font-thin">2024.03.26</p>
          <p className="float-left ml-12 font-thin">설날기념 픽셀단체 폭탄돌리기 합방</p>

          <p className="float-right mr-12 font-thin">© 2020 PIXEL NETWORK Co.Ltd.</p>
          <Link href="/contents"><p className="float-right mr-12">PR CONTENT</p></Link>
          <Link href="/client"><p className="float-right mr-12">Client</p></Link>
        </div>
      </div>
    </main>
  );
}
