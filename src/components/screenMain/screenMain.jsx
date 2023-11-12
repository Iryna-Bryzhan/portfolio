import React from "react"
import "./screenMain.css"
import screenBg from "../../img/Rectangle 67.png"
import MyPhoto from "../../img/photo_2022-03-29_16-05-30.jpg"
import SocialItem from "../socialItem/socialItem"

const ScreenMain = () => {
    return(
        <div className="screen-main">
            <div className="info-left animate__animated animate__fadeInLeft">
                <h3>Hello, I am</h3>
                <h1>Iryna Bryzhan</h1>
                <p>Front-end Developer</p>
                <a className="myCV" href="https://drive.google.com/file/d/1ef-xhQS7kkBqTjJabnFYJfyR2ra1Si23/view" target="blank">My CV</a>
                <SocialItem></SocialItem>
            </div> 
            <div className="info-right animate__animated animate__fadeInRight animate__delay-1s	">
                <img src={screenBg} alt="screenBg" />
                <img className="myPhoto" src={MyPhoto} alt="MyPhoto" />
            </div>
        </div>
    )
}

export default ScreenMain