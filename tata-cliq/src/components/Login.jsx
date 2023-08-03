


import { useContext, useState } from 'react';
import './Login.css'
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const { state, Login} = useContext(AuthContext);

    const [ userData, setUserData ] = useState({ email: "", password: "" });
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users"));

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                return alert("Please Check your email & password")
            } else {
                localStorage.setItem("Current-user", JSON.stringify(users[i]));
                Login(users[i])
                alert("Login Successfull....");
                setUserData({ email: "", password: "" });
                router('/')
            }
        }
    }

    

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
