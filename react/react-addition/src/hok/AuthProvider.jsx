import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const signin = (newUser, cb) => {
      setUser(newUser)
      cb()
   }
   const signout = (cb) => {
      setUser(null)
      cb()
   }
   return <AuthContext.Provider value={{user, signin, signout}}>
      {children}
   </AuthContext.Provider>
}