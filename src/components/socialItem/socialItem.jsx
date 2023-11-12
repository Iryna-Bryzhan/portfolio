import "./socialItem.css"
import inst from "../../img/instagram.svg"
import linkedin from "../../img/in.svg"
import github from "../../img/github-fill.svg"
import mail from "../../img/mail.svg"

const SocialItem = () =>{
    return(
        <div className="socials">
            <div className="social tel">
            <a href="tel:+380951587302">+380 (95) 158 73 02</a>   
            </div>
            <div className="social-items">
                <a className="social" href="mailto:ira97brig@gmail.com"><img src={mail} alt="mail" /></a>
                <a className="social" href="https://github.com/Iryna-Bryzhan?tab=repositories" target="blank"><img src={github} alt="github" /></a>
                <a className="social" href="https://github.com/Iryna-Bryzhan?tab=repositories" target="blank"><img src={linkedin} alt="linkedin" /></a>
                <a className="social" href="https://www.instagram.com/iryna_bryzhan/?igshid=NzZlODBkYWE4Ng%3D%3D" target="blank"><img src={inst} alt="inst" /></a>
            </div>
        </div>
    )
}
export default SocialItem