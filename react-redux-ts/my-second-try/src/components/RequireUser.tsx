import {useCookies} from "react-cookie";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {userApi} from "../store/services/userApi";
import FullScreenLoader from "./FullScreenLoader";

interface RequireUserProps {
    allowedRoles: string[] // массив пользовательских ролей
}

// компонент проверит, вошел ли пользователь в систему или авторизован для доступа к определенной странице
const RequireUser = ({allowedRoles}: RequireUserProps) => {
    const [cookies] = useCookies(['logged_in']);
    const location = useLocation();

    const {isLoading, isFetching} = userApi.endpoints.getMe.useQuery(null, {
        skip: false,
        refetchOnMountOrArgChange: true,
    });

    const loading = isLoading || isFetching;

    // запрос для условного получения информации о пользователе, если срок действия токена logged_in не истек
    const user = userApi.endpoints.getMe.useQueryState(null).data;

    if (loading)
        return <FullScreenLoader/>

    // Если пользователь вошел в систему и роль пользователя доступна в массиве
    return (cookies.logged_in || user) && (allowedRoles.includes(user?.role as string))
        ? (<Outlet/>)
        : cookies.logged_in && user
            ? (<Navigate to='/unauthorized' state={{from: location}} replace/>) // перенаправление на неавторизованную страницу
            : (<Navigate to='login' state={{from: location}} replace/> // перенаправление на страницу входа
            );
};

export default RequireUser;