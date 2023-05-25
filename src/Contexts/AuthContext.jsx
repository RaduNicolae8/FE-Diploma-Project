import React, { useState, useEffect, useContext, useMemo } from "react";
import newRequest from "../utils/newRequest";

// const AuthContext = React.createContext();

// export function useAuth(){
//     return useContext(AuthContext);
// }

// export function AuthProvider(props){
//     const [authUser, setAuthUser] = useState(null);

//     const value = useMemo(() => ({ authUser, setAuthUser }), [authUser, setAuthUser])

//     useEffect( async ()=>{
//         const res = await newRequest.get('/api/auth').then(res => res.json())
//         .then(res => {
//             setAuthUser(res);
//         })
//     },[])

//     console.log(authUser)

//     return (
//         <AuthContext.Provider value={value}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// }

export const useUser = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const value = useMemo(
    () => ({ authUser, setAuthUser, isLoggedIn, setIsLoggedIn }),
    [authUser, setAuthUser, isLoggedIn, setIsLoggedIn]
  );

  useEffect(  () => {
    if(isLoggedIn){
        newRequest
        .get("/api/auth")
        // .then((res) => {console.log(res);
        //     return res.json(); })
        .then((res) => {
          setAuthUser(res.data);
        });
    }
  }, [isLoggedIn]);

//   console.log(authUser);

  return (
    value
  )
};
