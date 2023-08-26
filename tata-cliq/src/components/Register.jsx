
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { toast } from 'react-hot-toast';
import axios from "axios"

const Register = () => {

    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "Buyer" })
    const router = useNavigate();


    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(userData.email && userData.password && userData.confirmPassword && userData.name && userData.role) {
            if(userData.password === userData.confirmPassword) {
                const response = await axios.post("http://localhost:4002/register", {userData})
                if(response.data.success){
                    setUserData({ name: "", email: "", password: "", confirmPassword: "", role: "Buyer" })
                    router('/login')
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
            } else {
                toast.error("Password and ConfirmPassword not matched...")
            }
        } else {
            toast.error("All fields are mandatory...")
        }

    }


    function selectRole(event) {
        console.log(event.target.value, "-role here")
        setUserData({ ...userData, "role": event.target.value })
    }




    return (

        <div id='register-body'>

            <div id='register'>
                <span ><i class="fa-solid fa-x"></i></span>
                <h1>Welcome to Tata </h1>
                <h1>CLiQ</h1>

                <form onSubmit={handleSubmit} >
                    <input type="text" onChange={handleChange} name="name" />

                    <input type="email" onChange={handleChange} name="email" /> <br />

                    <label>Select Role : </label>
                    <select id="select" onChange={selectRole}>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>

                    <input type="password" onChange={handleChange} name="password" />
                    {/* <label>ConfirmPassword</label><br /> */}
                    <input type='password' onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} /><br />


                    <p>By continuing, you agree to our  <b>Terms of Use</b>  and <b>Privacy Policy</b> </p>
                    <p>Alraedy a member <b onClick={() => router('/login')}>Click here</b></p>

                    <input id='button-login' type="submit" value="Register" />
                </form>


            </div>
        </div>


    )
}

export default Register;
