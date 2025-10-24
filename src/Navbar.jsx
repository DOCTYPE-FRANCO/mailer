import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="w-[70vw]">
            <ul className="flex flex-row gap-10 text-white">
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

            <p className="">Sign Up</p>
        </div>
    );
}

export default Navbar;