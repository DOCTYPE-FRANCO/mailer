import React from "react";
import { SendIcon } from "lucide-react";

function Home(){
    return(
        <div className="flex mx-auto w-[70vw] h-[80vh] bg-blue-950/80 rounded-md z-20 relative">
            <div className="flex flex-row justify-center w-full gap-4 items-center">
                <SendIcon color="#FFFFFF"/>
                <p className="text-2xl text-white font-bold">MAILER</p>
            </div>

            <div>
                
            </div>
        </div>
    );
}
export default Home;