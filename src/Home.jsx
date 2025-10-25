import React from "react";
import { Link } from "react-router-dom";
import { SendIcon, ChartArea, Calendar, HelpCircle,  Edit, Lightbulb } from "lucide-react";
import CountUp from "react-countup";

function Home(){
    return(
        <div className="flex flex-col gap-10 justify-center items-center pt-10 ">
            <div className="flex flex-row max-w-[550px] md:max-w-[600px] gap-5 justify-self-center items-center">
                <p className="md:text-6xl text-5xl text-center text-blue-950 font-extrabold">Send Bulk Emails with Mailer</p>   
            </div>

            

            <Link to="/mail">
                <p className="bg-blue-950 text-white font-bold hover:scale-110 hover:cursor-pointer p-3 px-8 md:px-6 rounded-md transition-all duration-300">Get Started</p>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
                <div className="flex flex-col gap-3 justify-center items-center w-[270px] h-[200px] bg-white z-20 rounded-2xl shadow-2xl">
                    <ChartArea color="#001F3F"  size={50}/>
                    <p className="font-bold text-blue-950">Analytic Report Dashboard</p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center w-[270px] h-[200px] bg-white z-20 rounded-2xl shadow-2xl">
                    <Calendar color="#001F3F"  size={50}/>
                    <p className="font-bold text-blue-950">Regular Maintenance</p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center w-[270px] h-[200px] bg-white z-20 rounded-2xl shadow-2xl">
                    <Edit color="#001F3F"  size={50}/>
                    <p className="font-bold text-blue-950">Simple Campaign Editor</p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center w-[270px] h-[200px] bg-white z-20 rounded-2xl shadow-2xl">
                    <HelpCircle color="#001F3F"  size={50}/>
                    <p className="font-bold text-blue-950">Priority Support</p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center w-[270px] h-[200px] bg-white z-20 rounded-2xl shadow-2xl">
                    <Lightbulb color="#001F3F"  size={50}/>
                    <p className="font-bold text-blue-950">Fast And Efficient</p>
                </div>
            </div>
        </div>
    );
}
export default Home;