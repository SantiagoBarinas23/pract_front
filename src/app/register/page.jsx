"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function register(){
    const router =  useRouter();

    const goLogin = () =>{
        router.push('/')
    }

    return(
        <>
            <div>
                <h1>Hola mundo!</h1>
            </div>
        </>
    )
}