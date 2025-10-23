import React from "react";
import { Link } from "react-router-dom";
import { SendIcon } from "lucide-react";

function Home(){
    return(
        <div className="flex flex-col gap-10 justify-center items-center pt-10">
            <div className="flex flex-row max-w-[600px] gap-5 justify-self-center items-center">
                <p className="md:text-6xl text-center text-blue-950 font-extrabold">Send Bulk Emails with Mailer</p>   
            </div>

            <p className="text-center text-2xl text-blue-950 font-bold">Send to 100 Email Addresses in less than 5 minutes</p>

            <Link to="/mail">
                <p className="bg-blue-950 text-white font-bold hover:scale-110 hover:cursor-pointer p-3 px-6 rounded-md transition-all duration-300">Get Started</p>
            </Link>
        </div>
    );
}
export default Home;