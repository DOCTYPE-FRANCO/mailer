import React from "react";
import Navbar from "./Navbar";
import { SendIcon } from "lucide-react";

function Header() {
    return (
        <div className="flex flex-row gap-28 justify-between items-center w-[75vw] h-[50px] bg-blue-950/80 backdrop-blur-sm z-30 fixed top-5 left-1/2 -translate-x-1/2 rounded-md px-6">
            <div className="flex flex-row items-center gap-4 hover:cursor-pointer">
                <SendIcon color="#FFFFFF"/>
                <p className="text-2xl text-white font-bold">MAILER</p>
            </div>

            <div>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;