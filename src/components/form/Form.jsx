import React, { useState } from "react";
import validation from "../../utils/validation";

export default function Form(props) {

    // const [userData, setUserData] = useState({email: "", password: ""})

    const [userData, setUserData] = useState({email:"", password:""})
    

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData, 
            [name]: value
        })
        setErrors(validation({
          ...userData,
          [name]: value  
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.login(userData);
    }    

    return(        
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input name="email" value={userData.email} onChange={handleChange} type="email" placeholder="Ingresa tu email"/>
            <p style={{color:"coral"}}>{errors.email ? errors.email : null}</p>
            <br />
            <label>Password:</label>
            <input name="password" value={userData.password} onChange={handleChange} type="password" placeholder="Ingresa tu password" />
            <p style={{color:"coral"}}>{errors.password ? errors.password : null}</p>
            <br />
            <button type="submit" disabled={errors.email || errors.password}>Submit</button>
        </form>
            
    )
}