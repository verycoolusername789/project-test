'use client';
 
import { useState } from 'react';

//this is all going to have to be reworked/tooled aha

export default function SignInButton(){
    function handleClick(){
        window.open("/dashboard","_self")
    }
    
    return <button onClick={handleClick}>Sign In</button>;
}