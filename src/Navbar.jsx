import React from "react";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="flex flex-row gap-20 items-center w-[500px]">
            <ul className="hidden md:flex flex-row gap-10 text-white">
                <Link to="/">
                    <p className="font-bold hover:scale-105 transition-all duration-300 active:text-gray-800">Home</p>
                </Link>

                <Link to="/">
                    <p className="font-bold hover:scale-105 transition-all duration-300 active:text-gray-800">Documentation</p>
                </Link>

                <Link to="/">
                    <p className="font-bold hover:scale-105 transition-all duration-300 active:text-gray-800">Contact</p>
                </Link>
                
            </ul>

            <p className="hidden md:flex text-blue-950 font-bold bg-white p-1 px-5 rounded-md hover:scale-105 hover:cursor-pointer active:bg-gray-600 transition-transform duration-300">Sign Up</p>

            <div className="md:hidden">
                <MenuIcon color="#FFFFFF"/>
            </div>
        </div>
    );
}

export default Navbar;