import {IRoute} from "../models/IRoute";
import Home from '../pages/Home'
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Todo from "../pages/Todo";
import PostById from "../pages/PostById";

export const privateRoutes: IRoute[] = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostById},
    {path: '/todo', component: Todo},
];

export const publicRoutes: IRoute[] = [
    {path: '/*', component: Login},
];