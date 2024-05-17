import React from "react";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Amount (in Rs)
                            </label>
                            <input
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                }}
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter amount"
                            />
                        </div>
                        <button onClick={async () => {
                            try {
                                await axios.post("http://localhost:3000/api/v1/account/transfer", {
                                // await axios.post("https://payment-app-backend-bcdb.onrender.com/api/v1/account/transfer", {
                                    to: id,
                                    amount
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem("token")
                                    }
                                })
                                navigate("/dashboard?status=" + "Transaction Success" )
                            } catch (e) {
                                setErr("Invalid Amount OR Insufficient Balance")
                            }
                        }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                            Initiate Transfer
                        </button>
                        <div className="text-red-500">{err}</div>
                        <button onClick={() =>
                            navigate("/dashboard?cancel=" + "Transaction Cancelled" )
                        } className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Cancel Transfer
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div >
}

