import React from "react";
import {RxCaretDown} from "react-icons/rx";
export default function Header(){
    return (
        <header className="p-[15px] shadow-xl">
            <div className="max-w-[1200px] mx-auto border border-red-300 flex item-center">
                <div className="w-[100px] border border-blue-500">
                    <img className="w-full" src={"../public/logo.png"} alt="logo" />
                </div>

                <div className="text-4ml font-semibold flex items-center">
                    <span className=" text-orange-500 font-bold border-b-[3px] border-[orange]">Malhani</span> 
                    , Jaunpur, Uttar Pradesh, India <RxCaretDown fontSize={25} className="font-b inline text-[#fc8019]"/>
                </div>
            </div>

        </header>
    );
}