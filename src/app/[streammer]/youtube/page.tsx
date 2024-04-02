'use client'

import dataset from "../../../utils/dataset.json";

import Image from "next/image";
import Link from "next/link";

import { Nav } from "@/components/Nav";
import { fetchYoutubeScribe, fetchYoutubeVideo } from "@/utils/api";

import cyoutube from "../../../../public/cyoutue.png"
import down_arrow from "../../../../public/bdown_arrow.svg"

import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
interface Video {
    title: string;
    date: string;
    thumbnail: string;
    url: string;
}

export default function Youtube() {
    const [subscribe,setSubscribe] = useState('');
    const [videos, setVideos] = useState<Video[]>([]);
    

    const pathname = usePathname()
    const streammer = (pathname.split('/'))[1];

    useEffect(()=>{
        const youtubeSubscribe = fetchYoutubeScribe(streammer);
        youtubeSubscribe.then((res)=>{
            setSubscribe(res.items[0].statistics.subscriberCount)
        })

        const newVideos = fetchYoutubeVideo(streammer);
        newVideos.then(res=>{
        setVideos(res) 
        })
    })

    let data: any;
    if(streammer === 'jinu')  {
        data = dataset.jinu;
    }
    else if(streammer === 'cham2'){
        data =dataset.cham2;
    }
    else data = dataset.jinu;
    const nextpath = "/"+streammer+"/chzzk";

    const abbreviateNumber = (number:number) => {
        const SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];
        if (number === 0) return number;
    
        const base = Math.floor(Math.log10(Math.abs(number)) / 3);
        const abbreviation = SI_SYMBOL[base];
        return (number / Math.pow(10, base * 3)).toFixed(0) + abbreviation;
    }
    
    
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
                    <p className="">02</p>
                    <div className="border-b border-black w-32 h-3"/>
                    <p className="">Youtube</p>
                </div>

                <div className="w-screen mt-32">
                    <h1 className="font-bold text-5xl text-center">YOUTUBE</h1>
                    <Image
                        src={cyoutube}
                        alt="유튜브 로고"
                        width={28}
                        className="mx-auto mt-4"
                    />
                    <p className="text-center font-thin mt-4">{abbreviateNumber(parseInt(subscribe))}</p>
                    <div className="grid grid-cols-2 mx-auto w-[70rem] gap-1">
                        <Link href={videos[0]?"https://www.youtube.com/watch?v="+videos[0].url:"https://www.youtube.com"}>
                            <Image 
                                src={videos[0]?videos[0].thumbnail:''}
                                alt=""
                                width={420}
                                height={120}
                                className="w-[32rem]  bg-white m-10 mx-auto mb-0"
                            />
                        </Link>
                        <Link href={videos[1]?"https://www.youtube.com/watch?v="+videos[1].url:"https://www.youtube.com"}>
                            <Image 
                                src={videos[1]?videos[1].thumbnail:''}
                                alt=""
                                width={420}
                                height={120}
                                className="w-[32rem]  bg-white m-10 mx-auto mb-0"
                            />
                        </Link>
                        <p className="text-xs ml-6">{videos[0]?videos[0].title:<></>}</p>
                        <p className="text-xs ml-6">{videos[1]?videos[1].title:<></>}</p>
                        <p className="text-xs ml-6">{videos[0]?videos[0].date.slice(0,10):<></>}</p>
                        <p className="text-xs ml-6">{videos[1]?videos[1].date.slice(0,10):<></>}</p>
                    </div>
                    <div className="grid grid-cols-3 mx-auto w-[85rem] gap-1">
                        <Link href={videos[2]?"https://www.youtube.com/watch?v="+videos[2].url:"https://www.youtube.com"}>
                            <Image 
                                src={videos[2]?videos[2].thumbnail:''}
                                alt=""
                                width={320}
                                height={120}
                                className="w-[26rem]  bg-white m-10 mx-auto mb-0"
                            />
                        </Link>
                        <Link href={videos[3]?"https://www.youtube.com/watch?v="+videos[3].url:"https://www.youtube.com"}>
                            <Image 
                                src={videos[3]?videos[3].thumbnail:''}
                                alt=""
                                width={320}
                                height={120}
                                className="w-[26rem]  bg-white m-10 mx-auto mb-0"
                            />
                        </Link>
                        <Link href={videos[4]?"https://www.youtube.com/watch?v="+videos[4].url:"https://www.youtube.com"}>
                            <Image 
                                src={videos[4]?videos[4].thumbnail:''}
                                alt=""
                                width={320}
                                height={120}
                                className="w-[26rem]  bg-white m-10 mx-auto mb-0"
                            />
                        </Link>
                        <p className="text-xs ml-6">{videos[2]?videos[2].title:<></>}</p>
                        <p className="text-xs ml-6">{videos[3]?videos[3].title:<></>}</p>
                        <p className="text-xs ml-6">{videos[4]?videos[4].title:<></>}</p>
                        <p className="text-xs ml-6">{videos[2]?videos[2].date.slice(0,10):<></>}</p>
                        <p className="text-xs ml-6">{videos[3]?videos[3].date.slice(0,10):<></>}</p>
                        <p className="text-xs ml-6">{videos[4]?videos[4].date.slice(0,10):<></>}</p>

                        <div className="h-10 w-10"></div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}