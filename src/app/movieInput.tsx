"use client";
import { useState } from "react";
import { addItem } from "../../slice";
import { useDispatch } from "react-redux";

export default function MovieInput () {
    const [movie, setMovie] = useState("");

    const dispatch = useDispatch();
    const onsubmit=()=>{
        dispatch(addItem(movie));
        setMovie("");
    }
    return(
        <>
        <h1>hello</h1>
        <input className="border-2" type="text" onChange={(e)=>setMovie(e.target.value)} value={movie}/><button onClick={onsubmit}> press</button></>
    )
}