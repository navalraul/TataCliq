import { useContext, useEffect, useState } from 'react';
import './Login.css'
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';


const Login = () => {

    const { state, dispatch} = useContext(AuthContext);

    const [ userData, setUserData ] = useState({ email: "", password: "" });
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            try{

                const response = await axios.post("http://localhost:4002/login", { userData });
                if (response.data.success) {
                    dispatch ({
                        type : "LOGIN",
                        payload : response.data.user
                    })
                    localStorage.setItem("token", JSON.stringify(response.data.token))
    
                    setUserData({ email: "", password: "" })
                    router('/')
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
            }catch(error){
                // toast.error(error.response.data.message)
                console.log(error.response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }

    useEffect(() => {
        if(state?.user?.name) {
            'router'('/')
        }
    },[state])

    return (
        <div id='login-body'>

            <div id='login'>
                <span  ><i class="fa-solid fa-x"></i></span>
                <h1>Welcome to Tata </h1>
                <h1>CLiQ</h1>

                <form onSubmit={handleSubmit} >

                    <input type='email' onChange={handleChange} name='email' />

                    <br />

                    <input type='password' onChange={handleChange} name='password' />


                    <p>By continuing, you agree to our  <b>Terms of Use</b>  and <b>Privacy Policy</b> </p>
                    <p>haven't registered yet here  ? <b onClick={ () => router('/register')}>Click here</b></p>

                    <input id='button-login' type="submit" value="Login" />
                </form>


            </div>

        </div>
    )
}

export default Login;
