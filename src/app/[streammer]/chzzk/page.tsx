'use client'

import dataset from "../../../utils/dataset.json";

import Image from "next/image";
import Link from "next/link";

import { Nav } from "@/components/Nav";
import cchzzk from "../../../../public/cchzzk.png"
import down_arrow from "../../../../public/bdown_arrow.svg"

import { usePathname } from 'next/navigation'


export default function Chzzk() {
    const pathname = usePathname()
    const streammer = (pathname.split('/'))[1];
    let data: any;
    if(streammer === 'jinu')  {
        data = dataset.jinu;
        data['live'] = '2086f44c7b09a17cef6786f21389db3b'
        data['chzzkfollow'] = '97K'
    }
    else if(streammer === 'cham2'){
        data =dataset.cham2;
        data['live'] = 'a7e175625fdea5a7d98428302b7aa57f'
        data['chzzkfollow'] = '206K'
    }
    else data = dataset.jinu;
    const nextpath = "/"+streammer+"/fancafe";

    return(
        <div>
            <div className="absolute w-screen h-screen">
                <Nav color="black"/>

                <Link href={nextpath} className="fixed bottom-3 left-[50%] animate-bounce">
                    <Image 
                    src={down_arrow}
                    alt="화살표"
                    width={30}
                    className=""
                    />
                </Link>
 

                <div className="fixed bottom-24 rotate-90 flex w-32">
                    <p className="">{data.id.toString().padStart(2,'0')}</p>
                    <div className="border-b border-black w-32 h-3"/>
                    <p className="">{data.name}</p>
                </div>

                <div className="fixed bottom-[38rem] right-0 -rotate-90 flex w-36">
                    <p className="pr-2">03</p>
                    <div className="border-b border-black w-32 h-3"/>
                    <p className="pl-2">Chzzk</p>
                </div>

                <div className="w-screen mt-32">
                    <h1 className="font-bold text-5xl text-center">CHZZK</h1>
                    <Image
                        src={cchzzk}
                        alt="치지직 로고"
                        width={28}
                        className="mx-auto mt-4"
                    />
                    <p className="text-center font-thin mt-4">{data.chzzkfollow}</p>
                </div>
                
                <iframe src={"https://chzzk.naver.com/live/"+data.live} className="mx-auto w-[863px] h-[486px] bg-gray-500 mt-20" width="853px" height="486px"></iframe>


            </div>
        </div>
    )
}