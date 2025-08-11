'use client'
import { useState } from "react";

export default function Likes(){
    const [likes, setlikes] = useState(0);

    function handlecli(){
        setlikes(likes + 1);
    }
    return <button onClick={handlecli}>Like({likes})</button>
}