"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginApi, otpApi } from "./api";
import { send } from "process";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login () {
    const[mobile, setMobile]=useState("");
    const[otp, setOtp]=useState("");
    const[hide,sethide]=useState(true);
    const dispatch = useDispatch();
    const router = useRouter();
    const onsubmit=async ()=>{
       const money=await loginApi(mobile, otp);
        // console.log(mobile, otp);
        Cookies.set("token", money.accesstoken);
        localStorage.setItem("user", JSON.stringify(money.posp_id));
        console.log(money);
       setMobile("");
       setOtp("");
router.push("/sucess");
    }
    const onotp=async()=>{
        const jack = await otpApi(mobile);
        sethide(false);
    }
return (
    <div className="flex flex-col items-center gap-6">
        <p>login</p>
        <input type="text" className="border-2" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        {hide&&  
        <button className="bg-green-600 w-4/4" onClick={onotp}> Send Otp</button>}
{!hide&&
        <><input type="number" className="border-2" value={otp} onChange={(e) => setOtp(e.target.value)} /><button className="bg-green-600 w-4/4" onClick={onsubmit}> submit</button></>}
<p></p>
    </div>)
}