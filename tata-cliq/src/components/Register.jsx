
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        password: "",
        role: "Buyer",
    });
    const router = useNavigate();

    const handlechange = (event) => {
        setUserdata({ ...userdata, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userdata.name && userdata.email && userdata.password) {
            const array = JSON.parse(localStorage.getItem("Users")) || [];

            const userobject = {
                name: userdata.name,
                email: userdata.email,
                password: userdata.password,
                role: userdata.role,
                cart: [],
            };
            array.push(userobject);
            localStorage.setItem("Users", JSON.stringify(array));

            setUserdata({ name: "", email: "", password: "", role: "Buyer" });
            router("/login");
            alert("Registerd succesfully");
        } else {
            alert("please submit the require details");
        }
    };

    function selectrole(event) {
        // console.log(event.target.value ,"role")
        setUserdata({ ...userdata, ["role"]: event.target.value });
    }

    

    return (
        
        <div id='register-body'>

            <div id='register'>
                <span ><i class="fa-solid fa-x"></i></span>
                <h1>Welcome to Tata </h1>
                <h1>CLiQ</h1>

                <form onSubmit={handleSubmit} >
                    <input placeholder='Name'
                        value={userdata.name}
                        type="text"
                        onChange={handlechange}
                        name="name" />

                    <input placeholder='E-mail Address'
                        value={userdata.email}
                        type="email"
                        onChange={handlechange}
                        name="email" /> <br />

                    <label htmlFor="">Select Role : </label>
                    <select id="select" onChange={selectrole}>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>

                    <input placeholder='Password'
                        value={userdata.password}
                        type="password"
                        onChange={handlechange}
                        name="password" />


                    <p>By continuing, you agree to our  <b>Terms of Use</b>  and <b>Privacy Policy</b> </p>
                    <p>Alraedy a member <b onClick={ () => router('/login')}>Click here</b></p>

                    <input id='button-login' type="submit" value="Register" />
                </form>


            </div>
        </div> 
        
        
  )
}

export default Register;
