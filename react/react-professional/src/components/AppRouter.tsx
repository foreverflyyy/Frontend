import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { privateRoutes, publicRoutes, RouteNames } from "../router"


const AppRouter = () => {
   const {isAuth} = useTypedSelector(state => state.auth)
   return (
      isAuth ?
      <Switch>
         {privateRoutes.map(route => 
            <Route path={route.path}
            exact={route.exact}
            component={route.component} 
            key={route.path}
            />)}
            <Redirect to={RouteNames.LOGIN}/>
      </Switch>
      :
      <Switch>
      {publicRoutes.map(route => 
         <Route path={route.path}
         exact={route.exact}
         component={route.component} 
         key={route.path}
         />)}
         <Redirect to={RouteNames.EVENT}/>
      </Switch>
   )
}
export default AppRouter