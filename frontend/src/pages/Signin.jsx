import React from "react";
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";


export const Signin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange = {(e)=>{setUsername(e.target.value)}} placeholder="Abhishek@gmail.com" label={"Email"} />
        <InputBox onChange = {(e)=>{setPassword(e.target.value)}} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            try {
              const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
              // const response = await axios.post("https://payment-app-backend-bcdb.onrender.com/api/v1/user/signin", {
              username,
              password
            });
            console.log(response.data.firstName)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("firstName", response.data.firstName)
            navigate("/dashboard")
            } catch (e) {
              setErr("Invalid Username OR password")
            }
            
          }}  label={"Sign in"} />
          <div className="text-red-500 font-bold">{err}</div>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/"} />
      </div>
    </div>
  </div>
}