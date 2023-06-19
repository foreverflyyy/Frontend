'use client'
import {FormEventHandler} from 'react';
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

const LoginForm = () => {

    const router = useRouter();

    const handlerForm: FormEventHandler<HTMLFormElement> =async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const result = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })

        if(result && !result.error){
            router.push('/profile')
        } else {
            console.log(result)
        }
    }

    return (
        <form onSubmit={handlerForm} className={'p-8 border-2 rounded-md flex flex-col'}>
            <div className={'mb-4'}>
                <label className={'pr-3'}>Email:</label>
                <input type={'email'} name={'email'} className={'p-1 border-2 rounded-md border-slate-800'} required/>
            </div>
            <div className={'mb-4'}>
                <label className={'pr-3'}>Password:</label>
                <input type={'password'} name={'password'} className={'p-1 border-2 rounded-md border-slate-800'} required/>
            </div>
            <button type={'submit'} className={'p-2 border-1 rounded-lg border-slate-800 hover:bg-slate-500 hover:text-white duration-300'}>Sign in</button>
        </form>
    );
};

export default LoginForm;