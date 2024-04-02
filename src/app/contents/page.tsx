import { Nav } from "@/components/Nav";
import left_array from "../../../public/left_array.svg"
import right_array from "../../../public/right_array.svg"

import Link from "next/link";
import Image from "next/image";

export default function Contents() {
    return(
        <div>
            <Nav color="black"/>

            <h1 className="text-5xl font-bold text-center pt-40">PR CONTENT</h1>
            <div className="pt-10 w-full h-[47.5rem] bg-black">
            
                <iframe 
                    className="-z-10 opacity-50"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/R3wFLlGbAwQ?autoplay=1&mute=1&amp;controls=0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"          
                    allowFullScreen 
                    frameBorder="0"
                    title="YouTube video player"
                    ></iframe>
            </div>

            <div className="fixed bottom-10 text-white w-full">
                <Link href="/jinu"><p className="float-left ml-12">크리에이터 : 김뿡</p></Link>
                <p className="float-left ml-12 font-thin">2020.01.17</p>

                <Link href="/client"><p className="float-right mr-12">유비소프트</p></Link>
                <p className="float-right mr-12 font-thin">Rainbow Six Siege</p>
            </div>
        </div>
    )
}