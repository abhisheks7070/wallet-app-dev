import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate()

    return <div className="shadow h-14 flex justify-between bg-slate-500">
        <div className="flex flex-col justify-center h-full ml-4 font-extrabold">
            myWALLET 
        </div>
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {localStorage.getItem("firstName")[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full mr-4 font-bold">
                Hello {localStorage.getItem("firstName").toUpperCase()}
            </div>
            <div>
                <button onClick={() => {
                    localStorage.clear()
                    navigate("/signin")
                }} className="w-30px m-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" >Logout

                </button>
            </div>
        </div>
    </div>
}