import React from "react";
import { Leaf, XIcon, CheckIcon, RocketIcon, BadgeDollarSign } from "lucide-react";

function Pricing() {
    return(
        <div className="flex flex-col z-20 pb-10">
            <div className="flex flex-col justify-center items-center gap-3">
                <p className="md:text-5xl text-3xl font-extrabold text-blue-950">Pricing Plans</p>
                <div className="flex flex-col text-sm md:text-xl text-blue-950 justify-center items-center gap-0.5 font-thin md:font-semibold">
                    <p>Choose a plan that fits your needs.</p>
                    <p>Start free and upgrade anytime - no credit card required</p>
                </div>
            </div>

            <div className="flex md:flex-row flex-col justify-center items-center gap-10 pl-3 mt-10 ">
                <div className="flex flex-col gap-3 pt-4 items-center w-[250px] h-[320px] bg-white z-10 shadow-2xl shadow-gray-700 rounded-md ">
                    <Leaf color="#00FF00" size={40} />
                    <p className="font-bold">Free</p>
                    <p className="text-2xl font-bold ">$0<span className="text-xs ml-1"> 7 days trial</span></p>
                    <p className="font-thin">Send up to 10 mails daily</p>

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> Basic email sending</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> Simple Campaign Editor </p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> 7-days usage limit</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <XIcon size={18} />
                            <p className="text-xs font-bold"> No Analytics Data Dashboards</p>
                        </div>
                    </div>

                    <p className="bg-green-500 flex justify-center items-center w-[200px] h-[35px]  font-bold text-white rounded-md hover:cursor-pointer hover:scale-105 transition-transform duration-300">Start for Free</p>
                </div>

                <div className="flex flex-col gap-3 pt-4 items-center w-[250px] h-[320px] bg-white z-10 shadow-2xl shadow-gray-700 rounded-md ">
                    <RocketIcon color="#0000FF" size={40} />
                    <p className="font-bold">Basic</p>
                    <p className="text-2xl font-bold ">$12<span className="text-xs ml-1">/ month</span></p>
                    <p className="font-thin">Send up to 1000 mails daily</p>

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> All Free features</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> Priority sending speed </p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> Basic Analytics Dashboard</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <XIcon size={18} />
                            <p className="text-xs font-bold"> No Team sharing</p>
                        </div>
                    </div>

                    <p className="bg-blue-700 flex justify-center items-center w-[200px] h-[35px] font-bold text-white rounded-md hover:cursor-pointer hover:scale-105 transition-transform duration-300">Upgrade to Basic</p>
                </div>

                <div className="flex flex-col gap-3 pt-4 items-center w-[250px] h-[320px] bg-white z-10 shadow-2xl shadow-gray-700 rounded-md ">
                    <BadgeDollarSign color="#800080" size={40} />
                    <p className="font-bold">Pro</p>
                    <p className="text-2xl font-bold ">$22<span className="text-xs ml-1">/month</span></p>
                    <p className="font-thin">Unlimited mails</p>

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold">All Basic Features</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> Full Analytic & Report </p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> Priority Support</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <CheckIcon size={18} />
                            <p className="text-xs font-bold"> Team Collaboration</p>
                        </div>

                        
                    </div>

                    <p className="bg-purple-700 flex justify-center items-center w-[200px] h-[35px] font-bold text-white rounded-md hover:cursor-pointer hover:scale-105 transition-transform duration-300">Go Pro</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;