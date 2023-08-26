import axios from "axios";
import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext();

const initalState = { user: null };

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload } // re assigning
        case "LOGOUT":
            return { user: null } // re assign
        default:
            return state;
    }

}
export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initalState);

    // function Login(userData) {
    //     dispatch({
    //         type: "LOGIN",
    //         payload: userData
    //     })
    // }

    // function Logout() {
    //     localStorage.removeItem("Current-user")
    //     dispatch({
    //         type: "LOGOUT"
    //     })
    // }

    // useEffect(() => {
    //     const userData = JSON.parse(localStorage.getItem("Current-user"))
    //     // console.log(userData, "userData")
    //     if (userData) {
    //         dispatch({
    //             type: "LOGIN",
    //             payload: userData
    //         })
    //     }
    // }, [])

    useEffect(()=> {
        async function getCurrentUser(){
            var token = JSON.parse(localStorage.getItem("token"))
            const response = await axios.post("http://localhost:4002/get-current-user",{token});
            if (response.data?.success) {
                dispatch({
                    type: "LOGIN",
                    payload: response.data.user
                })
            } else {
                dispatch({
                    type: "LOGOUT"
                });
            }
        }
        getCurrentUser();

    },[])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

