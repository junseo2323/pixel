'use client'

import dataset from "../../../utils/dataset.json";

import Image from "next/image";
import Link from "next/link";

import { Nav } from "@/components/Nav";

import jinu from "../../../../public/img/profile/jinu.png";
import cham2 from "../../../../public/img/profile/cham2.png";

import down_arrow from "../../../../public/bdown_arrow.svg"

import { usePathname } from 'next/navigation'

export default function Profile() {
    const pathname = usePathname()
    const streammer = (pathname.split('/'))[1];
    let data: any;
    if(streammer === 'jinu')  {
        data = dataset.jinu;
        data["bgimg"] = jinu;
    }
    else if(streammer === 'cham2'){
        data =dataset.cham2;
        data["bgimg"] = cham2;
    }
    else data = dataset.jinu;
    const nextpath = "/"+streammer+"/youtube";

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

                <div className="fixed bottom-[38rem] right-0 -rotate-90 flex w-32">
                    <p className="">01</p>
                    <div className="border-b border-black w-32 h-3"/>
                    <p className="">PROFILE</p>
                </div>

                <div className="relative ml-60 mt-40">
                    <div className={"w-[349px] h-[486px] absolute z-1 "+' bg-'+streammer} />
                    <Image
                        src={data.bgimg}
                        alt="지누프로필"
                        className="absolute z-2 w-[349px] h-[486px] ml-20 mt-20"
                    />
                </div>

                <div className="ml-[52rem] mt-[38rem]">
                    <h1 className="font-bold text-5xl">{data.name}</h1>
                    <p className="font-normal text-xs mt-5">이름: {data.korname}</p>
                    <p className="font-normal text-xs mt-5">생년월일: {data.birthday}</p>
                </div>

            </div>
        </div>
    )
}