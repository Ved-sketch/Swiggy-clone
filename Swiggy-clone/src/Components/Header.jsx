import React, { useState } from "react";
import {RxCaretDown} from "react-icons/rx";
import {IoIosSearch} from "react-icons/io";
import {CiDiscount1} from "react-icons/ci";

export default function Header(){

    const [toggle,setToggle] = useState(false);

    const showSideMenu = () =>{
        setToggle(true);
    }

    const hideSideMenu = () =>{
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch/>,
            name: "Search"
        },
        {
            icon: <CiDiscount1/>,
            name: "Offers"
        },
        {
            icon: "",
            name: "Help"
        },
        {
            icon: "",
            name: "Signin"
        },
        {
            icon: "",
            name: "Cart"
        }

    ]

    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}></div>
            
            <div onClick={(e) => {e.stopPropagation();}} className="w-[500px] bg-white h-full absolute duration-[400ms]" style={{
                left: toggle ?'0%' : '-100%'
            }}></div>

            <header className="p-[15px] shadow-xl">

                <div className="max-w-[1200px] mx-auto flex items-center">
                    <div className="w-[100px]">
                        <img className="w-full" src={"../public/logo.png"} alt="logo" />
                    </div>

                    <div className="text-4ml font-semibold">
                        <span className=" hover:text-[#fc8019] font-bold hover:border-b-[3px] duration-200">Malhani</span> 
                        , Jaunpur, Uttar Pradesh, India <RxCaretDown onClick={showSideMenu} fontSize={25} className="font-b inline text-[#fc8019]"/>
                    </div>

                    <nav className="flex list-none gap-4 ml-auto font-semibold text-[18px]">
                        {
                        
                            links.map(
                                (link, index) => {
                                        return <li key={index} className='flex hover:text-[#fc8019] cursor-pointer items-center gap-2'>
                                        {link.icon}
                                        {link.name}
                                    </li>
                                }
                            )
                        }

                    </nav>
                </div>


            </header>
        </>
    );
}