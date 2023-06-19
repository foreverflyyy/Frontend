import {Route, Routes} from 'react-router-dom'
import Layout from "../components/Layout";
import React from "react";
import EmailVerification from "../pages/Authorization/VerifyEmail";
import {privateRoutes, publicRoutes} from "./routes";
import {useAppSelector} from "../store/store";
import {LoginPage} from "../pages/Authorization/Login";
import Register from "../pages/Authorization/Register";

export default function AppRoute() {

    const {user} = useAppSelector(state => state.user);

    return (
        <Routes>
            {user
                ?
                <Route path='' element={<Layout/>}>
                    {privateRoutes.map(route =>
                        <Route key={route.path} path={route.path} Component={route.component}/>
                    )}
                </Route>
                :
                <>
                    <Route path='' element={<Layout/>}>
                        {publicRoutes.map(route =>
                            <Route key={route.path} path={route.path} Component={route.component}/>
                        )}
                    </Route>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='verifyemail' element={<EmailVerification/>}>
                        <Route path=':verificationCode' element={<EmailVerification/>}/>
                    </Route>
                </>
            }
        </Routes>
    )
}