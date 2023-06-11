import {IRoute} from "../models/IRoute";
import Home from '../pages/Home'
import Posts from "../pages/Post/Posts";
import Todo from "../pages/Todo";
import PostById from "../pages/Post/PostById";
import Unauthorize from "../pages/Unauthorize";
import Profile from "../pages/Profile";
import AdminProfile from "../pages/AdminProfile";
import NotFoundPage from "../pages/NotFoundPage";

export const privateRoutes: IRoute[] = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostById},
    {path: '/todo', component: Todo},
    {path: '/profile', component: Profile},
    {path: '/admin', component: AdminProfile},
    {path: '/*', component: NotFoundPage},
];

export const publicRoutes: IRoute[] = [
    {path: '/', component: Unauthorize},
    {path: '/*', component: Unauthorize},
];