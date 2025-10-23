import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <ul className="flex flex-row gap-3 text-white">
                <Link to="/">
                    <p>Home</p>
                </Link>

                <Link to="/">
                    <p>Send Mail</p>
                </Link>
                
            </ul>
        </div>
    );
}

export default Navbar;