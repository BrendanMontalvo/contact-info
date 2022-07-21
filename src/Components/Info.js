import React from "react"
import {useState} from 'react';

export default function Info() {
    const [buttonText, setButtonText] = useState("Email"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    return (
        <div className="info_box">
        <img src="/images/LinkedIn-Photo.jpg" className="info--photo"></img>
        <h1 className="dev_name">Brendan Montalvo</h1>
        <h2 className="dev_title">Front-end Developer</h2>
        <p className="dev_website">brendanmontalvo.com</p>
        <div className="btn-group">
        <button className="email-btn" onClick={(event) => [navigator.clipboard.writeText('brendan.montalvo21@gmail.com'), setButtonText("Copied!")]}><img src="/images/email-logo.png" className="email-logo" />{buttonText}</button>
        <button className="linkedin-btn" onClick={event => window.location.href='https://www.linkedin.com/in/brendan-montalvo/'}><img src="/images/linkedin-icon.png" className="linkedin-icon"/>LinkedIn</button>
        </div>
        </div>
    )
}
