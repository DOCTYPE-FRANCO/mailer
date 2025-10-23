import React from "react";
import Navbar from "./Navbar";
import { SendIcon } from "lucide-react";

function Header(){
    return(
        <div className="flex flex-row justify-self-center justify-center items-center w-[75vw] h-[50px] bg-blue-950/80 backdrop-blur-sm  z-40 fixed top-5 rounded-md">
            <div className="flex flex-row justify-center w-full gap-4 items-center">
                <SendIcon color="#FFFFFF"/>
                <p className="text-2xl text-white font-bold">MAILER</p>
            </div>

            <Navbar />
        </div>
    );
}

export default Header;