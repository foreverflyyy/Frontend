import { AppDispatch } from "../..";
import UserService from "../../../API/UserService";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetError, SetIsLoading, SetUser } from "./types";


export const AuthActionCreators = ({
   setUser: (user: IUser) :SetUser => ({type: AuthActionEnum.SET_USER, payload: user}),
   setIsAuth: (auth: boolean) :SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
   setIsLoading: (payload: boolean) :SetIsLoading => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
   setError: (payload: string) :SetError => ({type: AuthActionEnum.SET_ERROR, payload}),
   login: (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
         dispatch(AuthActionCreators.setIsLoading(true))
         setTimeout(async () => {
            const response = await UserService.getUsers()
            const mockUser = response.data.find(user => user.username === username && user.password === password)
            if (mockUser) {
               localStorage.setItem('auth', 'true')
               localStorage.setItem('username', mockUser.username)
               dispatch(AuthActionCreators.setUser(mockUser))
               dispatch(AuthActionCreators.setIsAuth(true))
            } else {
               dispatch(AuthActionCreators.setError('You enter wrong login or password'))
            }
         }, 1000)
         
         dispatch(AuthActionCreators.setIsLoading(false))
      } catch (e) {
         dispatch(AuthActionCreators.setError('Sorry, but error start with login!'))
      }
   },
   logout: () => async (dispatch: AppDispatch) => {
         localStorage.removeItem('auth')
         localStorage.removeItem('username')
         dispatch(AuthActionCreators.setUser({} as IUser))
         dispatch(AuthActionCreators.setIsAuth(false))
   }
})