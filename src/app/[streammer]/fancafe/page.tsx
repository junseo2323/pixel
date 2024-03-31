'use client'

import dataset from "../../../utils/dataset.json";

import Image from "next/image";
import Link from "next/link";

import { Nav } from "@/components/Nav";
import ccafe from "../../../../public/ccafe.png"
import down_arrow from "../../../../public/bdown_arrow.svg"

import { usePathname } from 'next/navigation'

export default function Fancafe() {
    const pathname = usePathname()
    const streammer = (pathname.split('/'))[1];
    let data: any;
    if(streammer === 'jinu')  {
        data = dataset.jinu;
    }
    else if(streammer === 'cham2'){
        data = dataset.cham2;
    }
    else data = dataset.jinu;
    const nextpath = "/"+streammer+"/schedule";

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
                    <p className="pr-2">04</p>
                    <div className="border-b border-black w-32 h-3"/>
                    <p className="pl-2">Fancafe</p>
                </div>

                <div className="w-screen mt-32 ml-40">
                    <h1 className="font-bold text-5xl text-left">FANCAFE</h1>
                    <Image
                        src={ccafe}
                        alt="팬카페 로고"
                        width={28}
                        className="mt-[0.8rem] float-left"
                    />
                    <p className="font-thin mt-4 ml-10">32K</p>
                </div>

                <div className="mx-auto grid grid-rows-5 w-[863px] h-[486px] border-t border-b border-solid border-black mt-20">
                    <div className="grid grid-cols-6 gap-4 border-b border-solid border-gray-500" >
                        <p className="m-5">001</p>
                        <div className="grid-span-4 m-5">
                            <p className="text-base">AI관련 공지!</p>
                            <p className="text-xs">2024-02-19</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 border-b border-solid border-gray-500" >
                        <p className="m-5">001</p>
                        <div className="grid-span-4 m-5">
                            <p className="text-base">AI관련 공지!</p>
                            <p className="text-xs">2024-02-19</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 border-b border-solid border-gray-500" >
                        <p className="m-5">001</p>
                        <div className="grid-span-4 m-5">
                            <p className="text-base">AI관련 공지!</p>
                            <p className="text-xs">2024-02-19</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 border-b border-solid border-gray-500" >
                        <p className="m-5">001</p>
                        <div className="grid-span-4 m-5">
                            <p className="text-base">AI관련 공지!</p>
                            <p className="text-xs">2024-02-19</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 border-b border-solid border-gray-500" >
                        <p className="m-5">001</p>
                        <div className="grid-span-4 m-5">
                            <p className="text-base">AI관련 공지!</p>
                            <p className="text-xs">2024-02-19</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}