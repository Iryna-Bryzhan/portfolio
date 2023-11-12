import Title from "../title/title";

import "./contact.css"

const Contact = () => {
    return(
        <div id="contact">
            <Title title="Contact"></Title>

            <div class="contact-content">
                <form class="form-message" action="">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <textarea type="text" placeholder="Message"></textarea>
                </form>
                <a href="/" class="btn">Send Message</a>
        
            </div>
        </div>
    )
}
export default Contact

