import {Route, Routes} from 'react-router-dom'
import {CssBaseline} from '@mui/material';
import Layout from '../components/Layout';
import ProfilePage from '../pages/Profile';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Authorization/Login';
import RegisterPage from '../pages/Authorization/Register';
import UnauthorizePage from '../pages/Unauthorize';
import RequireUser from '../components/RequireUser';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from '../pages/AdminProfile';
import EmailVerificationPage from '../pages/Authorization/VerifyEmail';

function AppRoute() {
    return (
        <>
            <CssBaseline/>
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>

                    {/* Private Route */}
                    <Route element={<RequireUser allowedRoles={['user', 'admin']}/>}>
                        <Route path='profile' element={<ProfilePage/>}/>
                    </Route>
                    <Route element={<RequireUser allowedRoles={['admin']}/>}>
                        <Route path='admin' element={<AdminPage/>}/>
                    </Route>
                    <Route path='unauthorized' element={<UnauthorizePage/>}/>
                </Route>
                <Route path='verifyemail' element={<EmailVerificationPage/>}>
                    <Route path=':verificationCode' element={<EmailVerificationPage/>}/>
                </Route>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='register' element={<RegisterPage/>}/>
            </Routes>
        </>
    );
}

// export default App;
//
// export default function AppRoute() {
//
//     /*const {isAuth} = useAppSelector(state => state.auth);*/
//     const isAuth = false;
//
//     return (
//         <Routes>
//             {isAuth
//                 ?
//                 privateRoutes.map(route =>
//                     <Route key={route.path} path={route.path} Component={route.component}/>
//                 )
//                 :
//                 publicRoutes.map(route =>
//                     <Route key={route.path} path={route.path} Component={route.component}/>
//                 )
//             }
//         </Routes>
//     )
// }