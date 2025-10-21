import React, {useState} from "react";
import { SendIcon } from "lucide-react";

function Home(){
    const [emails, setEmails] = useState("");
    return(
        <div className="flex flex-col gap-3 mx-auto w-[70vw] h-[80vh] bg-blue-950/80 rounded-md z-20 relative">
            <div className="flex flex-row justify-center w-full gap-4 items-center pt-3">
                <SendIcon color="#FFFFFF"/>
                <p className="text-2xl text-white font-bold">MAILER</p>
            </div>

            <div className="flex items-center mx-auto w-[50vw] h-[65vh] border-2 border-white rounded-md">
                <div className="flex flex-col gap-5 w-full">
                    <label className="flex flex-row text-2xl justify-center items-center gap-10 mx-auto text-white font-bold ">
                        MAILS:
                        <input 
                            type="text"
                            className="border-2 border-white w-[300px] h-[100px] font-thin text-white rounded-md pl-3 text-sm"
                            placeholder="Paste Emails here"
                        />
                    </label>

                    <label className="flex flex-row text-2xl justify-center items-center gap-2 mx-auto text-white font-bold ">
                        MESSAGE:
                        <input 
                            type="text"
                            className="border-2 border-white w-[300px] h-[100px] font-thin text-white rounded-md pl-3"
                            placeholder="Write message here"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}
export default Home;