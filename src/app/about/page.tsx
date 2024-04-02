import { Nav } from "@/components/Nav";
import pixel_black from "../../../public/pixel_black.svg"

import Image from "next/image";

export default function About() {
    return(
        <div>
            <Nav color="black"/>
            <div className="pt-[10rem]">
                <Image
                    src={pixel_black}
                    alt=""
                    className="mx-auto"
                    width={100}
                />

                <h1 className="text-3xl text-center mt-10">크리에이터 자신의 브랜드 가치를 온전히 인정받을 수 있도록</h1>
                <p className="text-ms text-center font-thin mt-10">픽셀네트워크는 '크리에이터 자신의 브랜드 가치를 온전히 인정받을 수 있도록' 하고자 설립된 회사입니다.</p>
                <p className="text-ms text-center font-thin">크리에이터가 직접 설립한 회사로 높은 신뢰도를 바탕으로 영향력 있는 크리에이터들이 뭉쳐있습니다.</p>
                <p className="text-ms text-center font-thin mt-10">크리에이터가 콘텐츠 제작에만 집중할 수 있도록, 동시에 더 많은 수익을 창출할 수 있도록 돕는 것이 픽셀네트워크의 목표입니다.</p>
                <p className="text-ms text-center font-thin">전문 디자이너와 MCN, 게임 업계 출신 인력들이 함께하고 있어 크리에이터에게는 온전한 브랜드 가치를, 파트너사에게는 긴밀한 솔루션을 제공합니다.</p>

                <h1 className="overflow-hidden mt-10 h-6">PIXEL NETWORK  PIXEL NETWORK  PIXEL NETWORK  PIXEL NETWORK  PIXEL NETWORK  PIXEL NETWORK  PIXEL NETWORK PIXEL NETWORK  PIXEL NETWORK PIXEL NETWORK  PIXEL NETWORK PIXEL NETWORK  PIXEL NETWORK  PIXEL NETWORK  PIXEL N</h1>

                <div className="mt-10 ml-10">
                    <h1 className="text-3xl">2024</h1>
                    <div className="ml-40 grid grid-cols-4 gap-10">
                        <div className="text-xl"><span>01</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>02</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>03</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>05</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        
                        <div className="text-xl"><span>06</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>07</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>08</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>09</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                    </div>
                </div>
                <div className="mt-10 ml-10">
                    <h1 className=" text-3xl">2023</h1>
                    <div className="ml-40 grid grid-cols-4 gap-10">
                        <div className="text-xl"><span>01</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>02</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>03</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>05</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        
                        <div className="text-xl"><span>06</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>07</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>08</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                        <div className="text-xl"><span>09</span> <span className="font-thin">탬탬버린 굳즈 발매</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}