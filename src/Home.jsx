import React, {useState} from "react";
import { SendIcon } from "lucide-react";
import axios from "axios";

function Home(){
    const [emails, setEmails] = useState("");
    const [message,setMessage] = useState("")

    async function handleSubmit(e){
        e.preventDefault();
        const emailArray = emails
            .split(/[\s,]+/)
            .filter((email) => email.includes("@"));
        console.log(emailArray);

        if(emailArray.length === 0){
            alert("Please enter valid Emails");
            return;
        }

        try{
            const response = await axios.post("http://localhost:8080/api/email/send", {
                to: emailArray,
                subject: "Mailer Test",
                body: message
            })

            setEmails("");
            setMessage("");

        }catch(error){
            console.log(error);
        }

    }

    
    return(
        <div className="flex flex-col gap-3 mx-auto w-[400px] h-[800px] md:w-[750px] md:h-[80vh] bg-blue-950/80 rounded-md z-20 relative">
            <div className="flex flex-row justify-center w-full gap-4 items-center pt-3">
                <SendIcon color="#FFFFFF"/>
                <p className="text-2xl text-white font-bold">MAILER</p>
            </div>

            <div className="flex flex-col gap-7 md:justify-center md:items-center mx-auto w-[350px] md:w-[650px] h-[65vh] border-2 border-white rounded-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full pt-20 md:pt-0">
                    <label className="flex flex-col md:flex-row text-2xl justify-center md:items-center gap-2 md:gap-10 mx-auto text-white font-bold ">
                        MAILS:
                        <input 
                            type="text"
                            className="border-2 border-white w-[300px] h-[100px] font-thin text-white rounded-md pl-3 text-sm"
                            placeholder="Paste Emails here"
                            value={emails}
                            onChange={(e) => setEmails(e.target.value)}
                        />
                    </label>

                    <label className="flex flex-col md:flex-row text-2xl justify-center md:items-center gap-2 mx-auto text-white font-bold ">
                        MESSAGE:
                        <input 
                            type="text"
                            className="border-2 border-white w-[300px] h-[100px] font-thin text-white rounded-md pl-3"
                            placeholder="Write message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>

                    <div className="flex justify-center mt-10 md:mt-0">
                        <button type="submit" className="w-[250px] h-[40px] md:w-[150px] md:h-[35px] bg-white font-bold rounded-md hover:scale-110 transition-all duration-500 active:bg-gray-800" >SEND</button>
                    </div>
                </form>

                
            </div>
        </div>
    );
}
export default Home;