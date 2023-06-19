import React from 'react';
import GoogleButton from "@/components/GoogleButton";
import LoginForm from "@/components/LoginForm";

function Page() {
    return (
        <div className={'flex justify-center flex-col items-center'}>
            <GoogleButton/>
            <h2>Or</h2>
            <LoginForm/>
        </div>
    );
}

export default Page;