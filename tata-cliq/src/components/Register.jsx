
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const [ userData, setUserData ] = useState({name: "", email: "", password: "", role:"Buyer"})
    const router = useNavigate();


    const handleChange=(event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit= (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password) {

            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const Ls = { name: userData.name,
               email: userData.email,
                password: userData.password, 
                role: userData.role,
              cart: [] };

            console.log(array)
            array.push(Ls);
            console.log(Ls)

            localStorage.setItem("Users", JSON.stringify(array));
            setUserData({  name: "", email: "", password: "", role:"Buyer" })
            alert("Registration Successful...")
            router('/login')
        } else{
            alert("Please fill all the fields")
        }
    }

    function selectRole(event) {
      console.log(event.target.value, "-role here")
      setUserData({...userData, ["role"]: event.target.value })
    }
   

    

    return (
        
        <div id='register-body'>

            <div id='register'>
                <span ><i class="fa-solid fa-x"></i></span>
                <h1>Welcome to Tata </h1>
                <h1>CLiQ</h1>

                <form onSubmit={handleSubmit} >
                    <input  type="text" onChange={handleChange} name="name" />

                    <input type="email" onChange={handleChange} name="email" /> <br />

                    <label>Select Role : </label>
                    <select id="select" onChange={selectRole}>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>

                    <input type="password" onChange={handleChange} name="password" />


                    <p>By continuing, you agree to our  <b>Terms of Use</b>  and <b>Privacy Policy</b> </p>
                    <p>Alraedy a member <b onClick={ () => router('/login')}>Click here</b></p>

                    <input id='button-login' type="submit" value="Register" />
                </form>


            </div>
        </div> 
        
        
  )
}

export default Register;
