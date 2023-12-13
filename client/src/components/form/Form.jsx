import React, { useState } from "react";
import validation from "../../utils/validation";
import styles from "./form.module.css"
import imagen from "../../images/login.png"


export default function Form(props) {

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
        <div className={styles.container}>
                <div className={styles.caja}>   
                    
                        <img src={imagen} alt="" />
                            <form onSubmit={handleSubmit}>
                                <br />

                                <div className={styles.labelsInputs}>
                                <label><b>Email: </b></label>
                                <input name="email" value={userData.email} onChange={handleChange} type="email" placeholder="Ingresa tu email"/>
                                </div>

                                <p style={{color:"coral"}}>{errors.email ? errors.email : null}</p>

                                <div className={styles.labelsInputs}>
                                <label><b>Password: </b></label>
                                <input name="password" value={userData.password} onChange={handleChange} type="password" placeholder="Ingresa tu password" />
                                </div>

                                <p style={{color:"coral"}}>{errors.password ? errors.password : null}</p>
                                <div className={styles.centBtn}>
                                <button type="submit" disabled={errors.email || errors.password}>Submit</button>
                                </div>
                            </form>
                       
                </div>
            
        </div> 
    )
}