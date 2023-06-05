import {IRoute} from "../models/IRoute";
import Home from '../pages/Home'
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Todo from "../pages/Todo";

export const privateRoutes: IRoute[] = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    {path: '/todo', component: Todo},
];

export const publicRoutes: IRoute[] = [
    {path: '/*', component: Login},
];