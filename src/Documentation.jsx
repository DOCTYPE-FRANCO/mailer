import React from "react";
function Documentation(){
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="flex justify-center font-extrabold text-2xl md:text-4xl mb-4">Documentation</p>
            <p className="flex justify-center max-w-[300px] text-center">Learn how to get started with Mailer and use all its features</p>

            <div className="flex flex-col mt-7 pt-10 pb-10 justify-self-center  items-center z-20 w-[350px] h-[450px] md:w-[600px] md:h-[330px] bg-white shadow-2xl shadow-gray-500 rounded-md">
                <p className="text-3xl font-bold">Sending Mails</p>

                <ol className="flex flex-col pl-5 md:pl-0 gap-4 mt-10">
                    <li>1. Add the Subject of the Mail.</li>
                    <li>2. Paste Mail Addresses in the Alloted spaces.</li>
                    <li>3. Separate the Addresses with comma's or spaces.</li>
                    <li>4. Lastly draft your Message.</li>
                    <li>5. Click Send.</li>
                </ol>
            </div>
        </div>
    );
}
export default Documentation;