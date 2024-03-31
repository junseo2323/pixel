'use client'

import dataset from "../../../utils/dataset.json";

import Image from "next/image";
import Link from "next/link";

import { Nav } from "@/components/Nav";
import cyoutube from "../../../../public/cyoutue.png"
import down_arrow from "../../../../public/bdown_arrow.svg"

import { usePathname } from 'next/navigation'

export default function Youtube() {
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
    const nextpath = "/"+streammer+"/youtube";

    return(
        <div>
            <div className="absolute w-screen h-screen">
                <Nav color="black"/>
                <Link href="/jinu/chzzk" className="fixed bottom-3 left-[50%] animate-bounce">
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
                    <p className="text-center font-thin mt-4">519K</p>
                    <div className="grid grid-cols-2 mx-auto w-[70rem] gap-1">
                        <div className="w-[32rem] h-[18rem] bg-gray-500 m-10 mx-auto mb-0">썸네일</div>
                        <div className="w-[32rem] h-[18rem] bg-gray-500 m-10 mx-auto mb-0">썸네일</div>
                        <p className="text-xs ml-6">【 탬탬버린／3월 2주차 하이라이트! 】 -3월 2주차에 있었던 핫클립들을 모아놓은 주간핫클립!</p>
                        <p className="text-xs ml-6">【 탬탬버린／3월 2주차 하이라이트! 】 -3월 2주차에 있었던 핫클립들을 모아놓은 주간핫클립!</p>
                        <p className="text-xs ml-6">2024-03-24</p>
                        <p className="text-xs ml-6">2024-03-24</p>
                    </div>
                    <div className="grid grid-cols-3 mx-auto w-[85rem] gap-1">
                        <div className="w-[26rem] h-[14rem] bg-gray-500 m-10 mx-auto mb-0">썸네일</div>
                        <div className="w-[26rem] h-[14rem] bg-gray-500 m-10 mx-auto mb-0">썸네일</div>
                        <div className="w-[26rem] h-[14rem] bg-gray-500 m-10 mx-auto mb-0">썸네일</div>
                        <p className="text-xs ml-6">【 탬탬버린／3월 2주차 하이라이트! 】 -3월 2주차에 있었던 핫클립들을 모아놓은 주간핫클립!</p>
                        <p className="text-xs ml-6">【 탬탬버린／3월 2주차 하이라이트! 】 -3월 2주차에 있었던 핫클립들을 모아놓은 주간핫클립!</p>
                        <p className="text-xs ml-6">【 탬탬버린／3월 2주차 하이라이트! 】 -3월 2주차에 있었던 핫클립들을 모아놓은 주간핫클립!</p>
                        <p className="text-xs ml-6">2024-03-24</p>
                        <p className="text-xs ml-6">2024-03-24</p>
                        <p className="text-xs ml-6">2024-03-24</p>

                    </div>
                </div>

                

            </div>
        </div>
    )
}