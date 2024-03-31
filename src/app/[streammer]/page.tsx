'use client'

import dataset from "../../utils/dataset.json";

import Image from "next/image";

import insta from "../../../public/insta.svg"
import chzzk from "../../../public/chzzk.svg"
import twitter from "../../../public/twitter.svg"
import youtube from "../../../public/youtube.svg"
import down_arrow from "../../../public/down_arrow.svg"

import jinu_bgimg from "../../../public/img/JINU.jpeg"
import cham2_bgimg from "../../../public/img/CHAM2.jpeg"

import { Nav } from "@/components/Nav";

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function JINU() {
    const pathname = usePathname()
    const streammer = (pathname.split('/'))[1];
    let data: any;
    if(streammer === 'jinu')  {
        data = dataset.jinu;
        data["bgimg"] = jinu_bgimg;
    }
    else if(streammer === 'cham2'){
        data =dataset.cham2;
        data["bgimg"] = cham2_bgimg;
    }
    else data = dataset.jinu;
    const nextpath = "/"+streammer+"/profile";

  return (
    <div  className="text-white outer">
        <div className="absolute bg-black/35 w-screen h-screen">
            <Nav />
            <Link href={nextpath} className="fixed bottom-3 left-[50%] animate-bounce">
                <Image 
                src={down_arrow}
                alt="화살표"
                width={30}
                className=""
                />
            </Link>
            <div className="w-64 mt-32 mr-10 float-right border-b border-solid">
                <h1 className="text-5xl text-right pt-10">{data.name}</h1>
                <h1 className="text-4xl font-thin text-right pt-10 pb-10">{data.korname}</h1>
            </div>
            <div className="fixed z-10 bottom-0 left-0 ml-10 mb-20 ">
                <Link href={data.instagram}>
                    <Image 
                    src={insta}
                    alt="인스타그램"
                    width={25}
                    className="mt-5"
                    />
                </Link>
                <Link href={data.chzzk}>
                    <Image 
                    src={chzzk}
                    alt="치지직"
                    width={25}
                    className="mt-5"
                    />
                </Link>
                <Link href={data.fancafe}>
                    <Image 
                    src={twitter}
                    alt="트위터"
                    width={25}
                    className="mt-5"
                    />
                </Link>
                <Link href={data.youtube}>
                    <Image 
                    src={youtube}
                    alt="유튜브"
                    width={25}
                    className="mt-5"
                    />
                </Link>
            </div>
            <p className="fixed z-10 bottom-0 right-0 mr-10 mb-20 font-thin text-sm">Copyright © 2020 PIXEL NETWORK Co.Ltd. All Rights Reserved</p>
        </div>
        <Image 
            src={data.bgimg}
            alt="썹네일"
            layout="fill"
            objectFit="cover"
            objectPosition="center"

            className="-z-10"
        />
    </div>
  );
}
