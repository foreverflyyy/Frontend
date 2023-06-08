import {Route, Routes} from 'react-router-dom'
import {privateRoutes, publicRoutes} from './routes';
import {useAppSelector} from "../store/store";

export default function AppRoute() {

    const {isAuth} = useAppSelector(state => state.auth);

    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} Component={route.component}/>
                )
                :
                publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} Component={route.component}/>
                )
            }
        </Routes>
    )
}
