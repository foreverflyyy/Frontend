'use client'
import React from 'react';
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";

const GoogleButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callback') || '/profile';

    return (
        <button
            className={'p-2 border-1 rounded-lg border-slate-800 hover:bg-slate-500 hover:text-white duration-300'}
            onClick={() => signIn('google', {callbackUrl})}>
            Sign in with Google
        </button>
    );
};

export default GoogleButton;