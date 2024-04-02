"use client"

import { Nav } from "@/components/Nav"
import { useEffect } from "react";

declare global {
    interface Window {
      kakao: any;
    }
  }  

export default function Contact() {
    useEffect(() => {
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`
        document.head.appendChild(kakaoMapScript)
      
        const onLoadKakaoAPI = () => {
          window.kakao.maps.load(() => {
            var container = document.getElementById('map')
            var options = {
              center: new window.kakao.maps.LatLng(37.4851372, 126.8950543),
              level: 3,
            }
      
            var map = new window.kakao.maps.Map(container, options)

            var markerPosition  = new window.kakao.maps.LatLng(37.4851372, 126.8950543); 

            // 마커를 생성합니다
            var marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
          })
        }
      
        kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
      }, [])
          
    return(
        <div className="bg-black w-screen h-full">
            <Nav color="white"/>

            <h1 className="text-white text-5xl font-bold text-center pt-40">CONTACT US</h1>

            <h1 className="text-white text-5xl font-bold text-left pl-10 pt-20">ADRESS</h1>
            <div className="pl-40 pt-5">
                <p className="text-white">서울특별시 구로구 디지털로31길 12, 넥스트데이 2층 별관 74호</p>
                <p className="text-white pt-3">서울특별시 마포구 신촌로4길 22-14(동교동) 5층 픽셀네트워크</p>
            </div>
            <div id="map" className="ml-10 mt-[3rem] w-[40rem] h-[20rem]"></div>

            <h1 className="text-white text-5xl font-bold text-left pl-10 pt-20">EMail</h1>
            <div className="pl-40 pt-5 pb-32">
                <p className="text-white">biz@pixelnetwork.co.kr</p>
                <p className="text-white pt-3">store@pixelnetwork.co.kr</p>
            </div>

        </div>
    )
}