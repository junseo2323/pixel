'use client'

import dataset from "../../../utils/dataset.json";

import Image from "next/image";
import { Nav } from "@/components/Nav";
import { usePathname } from 'next/navigation'

export default function Schedule() {
    const pathname = usePathname()
    const streammer = (pathname.split('/'))[1];
    let data: any;
    if(streammer === 'jinu')  {
        data = dataset.jinu;
    }
    else if(streammer === 'cham2'){
        data =dataset.cham2;
    }
    else data = dataset.jinu;

    return(
        <div>
            <div className="absolute w-screen h-screen">
                <Nav color="black"/>
                
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
                    <h1 className="font-bold text-5xl text-left">SCHEDULE</h1>
                </div>

                <div className="grid grid-cols-2">
                    <div className="ml-40 grid gap-2 grid-rows-5 w-[418px] h-[350px] border-t border-solid border-black mt-20 float-left">
                        <div className="mt-3">
                            <p className="text-xs">2024-05-20</p>
                            <div className="bg-red-300 rounded-full mr-2 float-left w-5 h-5" /> <p className="text-base">탬탬버린 생일</p>
                        </div>
                        <div className="">
                            <p className="text-xs">2024-05-23</p>
                            <div className="bg-red-300 rounded-full mr-2 float-left w-5 h-5" /> <p className="text-base">개발자 생일</p>
                        </div>
                    </div>
                    
                    <div className="mt-20">
                        여기에 달력이 들어갑니다.
                    </div>
                </div>


            </div>
        </div>
    )
}