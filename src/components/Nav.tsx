'use client'

import pixel from '../../public/pixel.svg';
import pixel_black from '../../public/pixel_black.svg';

import hamburger from '../../public/hambuger.svg';
import hamburger_black from '../../public/hamburger_black.svg';

import Image from 'next/image';
import { useState } from 'react';

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
            <a className='text-white pl-10' href='http://www.naver.com'>Pixel Store</a>


            <div className='p-[10rem]'>
            <div className='w-80 h-100 overflow-hidden'>
                <div className='border-b border-white relative pt-10 z-1 ' />
                
                    <div className='float-left absolute top-[19rem] text-white'>
                        <h1 className='text-2xl bg-[#201E1E]'>PIXEL</h1>
                        <p className='font-thin text-xl pt-3'>ABOUT US</p>
                        <p className='font-thin text-xl pt-2'>ABOUT US</p>
                        <p className='font-thin text-xl pt-2'>ABOUT US</p>
                        <p className='font-thin text-xl pt-2'>ABOUT US</p>
                    </div>
                    <div className='float-right  absolute top-[19rem] ml-64 pl-3 text-white'>
                        <h1 className='text-2xl bg-[#201E1E]'>STREAMER</h1>
                        <div>
                            <div className='float-left'>
                            <p className='font-thin text-xl pt-3'>JINU</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            </div>
                            <div className='float-left pl-10'>
                            <p className='font-thin text-xl pt-3'>JINU</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            </div>
                            <div className='float-left pl-10'>
                            <p className='font-thin text-xl pt-3'>JINU</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            <p className='font-thin text-xl pt-2'>CHAM2</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='w-96 h-100 overflow-hidden mt-48 text-white'>
                <div className='border-b border-white relative pt-10 z-1' />

                <h1 className='bg-[#201E1E] absolute top-[33.5rem] text-2xl'>PIXELSTORE</h1>
                <h1 className='bg-[#201E1E] absolute top-[33.5rem] ml-96 text-2xl'>YOUTUBE</h1>
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
            <Image 
                src={pixel_black}
                alt='픽셀로고'
                width={80}
                className='float-left'
            />
            

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
            <Image 
                src={pixel}
                alt='픽셀로고'
                width={80}
                className='float-left'
            />
            

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