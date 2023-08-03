
import React, { useContext, useState } from 'react'

import './Login.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const Login = () => {


    const { state, Login } = useContext(AuthContext);
    const [userdatalogin, setUserdatalogin] = useState({ email: "", password: "", role: "" });
    const router = useNavigate();

    const hangleChangeLogin = (event) => {
        setUserdatalogin({ ...userdatalogin, [event.target.name]: event.target.value });
    };

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        if (userdatalogin.email && userdatalogin.password) {
            const users = JSON.parse(localStorage.getItem("Users")); //access to LS

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (
                    users[i].email == userdatalogin.email &&
                    users[i].password == userdatalogin.password
                ) {
                    flag = true;
                    localStorage.setItem(("Current-User"), JSON.stringify(users[i]));
                    Login(users[i]);
                    alert("login succesfull")
                    setUserdatalogin({ email: "", password: "", role: "" })
                    router("/");
                    break;
                }
            }
            if (flag == false) {
                alert("Please check credentials.");   //RETURN
            }

        } else {
            alert("Please submit all details");
        }
    };


    return (
        <div id='login-body'>

            <div id='login'>
                <span  ><i class="fa-solid fa-x"></i></span>
                <h1>Welcome to Tata </h1>
                <h1>CLiQ</h1>

                <form onSubmit={handleSubmitLogin} >

                    <input
                        placeholder='E-mail Address'
                        type='email'
                        name="email"
                        onChange={hangleChangeLogin}
                        value={userdatalogin.email} />

                    <br />

                    <input placeholder='Password'
                        type="password"
                        name="password"
                        onChange={hangleChangeLogin}
                        value={userdatalogin.password}
                    />


                    <p>By continuing, you agree to our  <b>Terms of Use</b>  and <b>Privacy Policy</b> </p>
                    <p>haven't registered yet here  ? <b onClick={ () => router('/register')}>Click here</b></p>

                    <input id='button-login' type="submit" value="Login" />
                </form>


            </div>

        </div>
    )
}

export default Login;
