import React from "react";
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from "axios"

export const Dashboard = () => {
    const [bal, setBal] = useState(0)

    const [searchParams] = useSearchParams();
    const status = searchParams.get("status");
    const cancel = searchParams.get("cancel");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
        // axios.get("https://payment-app-backend-bcdb.onrender.com/api/v1/account/balance", {
            headers: {
                authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                setBal(response.data.balance)
            })
    }, [])
    return <div>
        <Appbar />
        <div className="m-8">
            <div className="text-xl font-bold text-green-600">{status}</div>
            <div className="text-xl font-bold text-red-600">{cancel}</div>
            <Balance value={bal} />
            <Users />
        </div>
    </div >
}


