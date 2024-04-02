'use client'

import pixel from '../../public/pixel.svg';
import pixel_black from '../../public/pixel_black.svg';

import hamburger from '../../public/hambuger.svg';
import hamburger_black from '../../public/hamburger_black.svg';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Ham = (props:any) => {
    const setToggle = props.setToggle;
    const toggle = props.toggle;

    const handleClick = () => {
        setToggle(!toggle);
    }
    return(
        <div className='w-screen h-screen fixed bg-[#201E1E] z-50'>
            <div className='p-10 pb-0 inline-block w-screen'>
                <Image 
                    src={pixel}
                    alt='픽셀로고'
                    width={80}
                    className='float-left'
                />

                <button className='float-right' onClick={handleClick} >
                    <Image 
                        src={hamburger}
                        alt='햄버거'
                        width={30}
                    />  
                </button>
            </div>
            <a className='text-white pl-10' href='https://pixelstore.kr/'>Pixel Store</a>


            <div className='p-[10rem] pt-[2rem]'>
            <div className='w-80 h-100 overflow-hidden'>
                <div className='border-b border-white relative pt-8 z-1 ' />
                
                    <div className='float-left absolute top-[10.5rem] text-white'>
                        <h1 className='text-2xl bg-[#201E1E]'>PIXEL</h1>
                        <Link href='/about'><p className='font-thin text-xl pt-3'>ABOUT US</p></Link>
                        <Link href='/client'><p className='font-thin text-xl pt-2'>CLIENT</p></Link>
                        <Link href='/contents'><p className='font-thin text-xl pt-2'>PR CONTENTS</p></Link>
                        <Link href='/contact'><p className='font-thin text-xl pt-2'>CONTACT</p></Link>
                    </div>
                    <div className='float-right  absolute top-[10.3rem] ml-64 pl-3 text-white'>
                        <h1 className='text-2xl bg-[#201E1E]'>STREAMER</h1>
                        <div>
                            <div className='fixed '>
                            <Link href='/jinu'><p className='font-thin text-xl pt-3'>JINU</p></Link>
                            <Link href='/cham2'><p className='font-thin text-xl pt-2'>CHAM2</p></Link>
                            <p className='font-thin text-xl pt-2'>NANAYANG</p>
                            <p className='font-thin text-xl pt-2'>SAHYANG</p>
                            <p className='font-thin text-xl pt-3'>CHABI</p>
                            <p className='font-thin text-xl pt-2'>0828</p>
                            </div>
                            <div className='fixed left-[37rem]'>
                            <p className='font-thin text-xl pt-2'>BBONGE</p>
                            <p className='font-thin text-xl pt-2'>ADUCK</p>
                            <p className='font-thin text-xl pt-3'>BBIBU</p>
                            <p className='font-thin text-xl pt-2'>DDOLBOK</p>
                            <p className='font-thin text-xl pt-2'>GAMBLER</p>
                            <p className='font-thin text-xl pt-2'>SILPH</p>
                            </div>
                            <div className='fixed left-[47rem]'>
                            <p className='font-thin text-xl pt-3'>A924</p>
                            <p className='font-thin text-xl pt-2'>MANGAE</p>
                            <p className='font-thin text-xl pt-2'>CHOHONG</p>
                            <p className='font-thin text-xl pt-2'>GANG_G</p>
                            <p className='font-thin text-xl pt-3'>BADGILE</p>
                            <p className='font-thin text-xl pt-2'>KIMDDUDDI</p>
                            </div>
                            <div className='fixed left-[57rem]'>
                            <p className='font-thin text-xl pt-2'>SNOW_HITE</p>
                            <p className='font-thin text-xl pt-2'>IM_NA_EUN</p>
                            <p className='font-thin text-xl pt-3'>YOON_E_SAEM</p>
                            <p className='font-thin text-xl pt-2'>NUBUL</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='w-96 h-100 overflow-hidden mt-48 text-white'>
                <div className='border-b border-white relative pt-36 z-1' />

                <Link href='https://pixelstore.kr/'><h1 className='bg-[#201E1E] absolute top-[31.3rem] text-2xl'>PIXELSTORE</h1></Link>
                <Link href='https://www.youtube.com/@user-he5xh9eq3g'><h1 className='bg-[#201E1E] absolute top-[31.3rem] left-[10rem] ml-96 text-2xl'>YOUTUBE</h1></Link>
            </div>
            </div>
        </div>
    )
}

interface NavProps {
    color : string;
}

export const Nav: React.FC<NavProps> = ({color}) => {
    const [toggle,setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }
    return(
        <>
        {toggle?<Ham toggle={toggle} setToggle={setToggle}/>:<></>}
        {color==="black"?
        <>
        <div className="w-screen inline-block p-10 fixed z-10">
            <Link href='/'>
                <Image 
                    src={pixel_black}
                    alt='픽셀로고'
                    width={80}
                    className='float-left'
                />
            </Link>
            

            <button className='float-right' onClick={handleClick}>
                <Image 
                    src={hamburger_black}
                    alt='픽셀로고'
                    width={30}
                />  
            </button>

        </div>

        </>
        :
        <>
    <div className="w-screen inline-block p-10 fixed z-10">
            <Link href='/'>
                <Image 
                    src={pixel}
                    alt='픽셀로고'
                    width={80}
                    className='float-left'
                />
            </Link>
            

            <button className='float-right' onClick={handleClick}>
                <Image 
                    src={hamburger}
                    alt='픽셀로고'
                    width={30}
                />  
            </button>

        </div>

        </>}
        </>
    )
}