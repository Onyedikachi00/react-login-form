import React, { useState } from "react";
import "./LoginForm.css"
import lincolnlogo from './lincolnlogo.jpeg';

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout (() => showPopup("hide"), 3000)
    }
    return (
        <div className="cover">
            <img src={lincolnlogo}/>
            <h1>Sign Up</h1>
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="EMAIL" />
            <input type="text" placeholder="PASSWORD" />
            <input type="text" placeholder="CONFIRM PASSWORD" />
          
            <div className="login-btn" onClick={popup}>SIGNUP</div>

            <div className={popupStyle}>
                <h3 className="stuLect" >Login Successful!</h3>
                <p className="stuLectp" >Are you a Student or a Lecturer? </p>

            </div>
        </div>
    )
}

export default LoginForm