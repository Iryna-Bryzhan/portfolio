import Title from "../title/title"
import "./portfolio.css"

import iconsLink from "../../img/akar-icons_link-chain.png"
import iconsGithub from "../../img/akar-icons_github-fill.png"
import card1 from "../../img/Screenshot_24.png"
import card2 from "../../img/Screenshot_1.png"
import card3 from "../../img/Screenshot_3.png"
import card4 from "../../img/Screenshot_4.png"
import card5 from "../../img/Screenshot_5.png"

const Portfolio = () => {
    return(
        <div id="portfolio">
            <Title title="Portfolio"></Title>

            <div class="cards">

  <div class="card">
    <div class="card__image-holder">
      <img class="card__image" src={card1} alt="wave" />
    </div>
    <div className="card-info">
        <div class="card-title">
            <h2>Landing page for NRG.space</h2>
            <p>Page development, deployment on hosting, setting up forms</p>
            <p><strong>Tech stack:</strong> HTML, CSS, JavaScript</p>
        </div>
        <div class="card-links">
            <a className="card-link-item" href="https://nrgspace.com.ua/" target="blank">
                <img src={iconsLink} alt="link-chain" />
                <p>Live Preview</p>
            </a>
            <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/NRG.space" target="blank">
                <img src={iconsGithub} alt="github-fill" />
                <p>View Code</p>
            </a>
        </div>
    </div>  
  </div>

  <div class="card">
    <div class="card__image-holder">
      <img class="card__image" src={card2} alt="wave" />
    </div>
    <div className="card-info">
        <div class="card-title">
            <h2>Landing page for NEXT-ENERGY</h2>
            <p>Making changes to the website, adding sections, setting up forms</p>
            <p><strong>Tech stack:</strong> HTML, CSS, JavaScript</p>
        </div>
        <div class="card-links">
            <a className="card-link-item" href="https://www.next-energy.pro/" target="blank">
                <img src={iconsLink} alt="link-chain" />
                <p>Live Preview</p>
            </a>
            <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/Iryna-Bryzhan.next-energy.github.io" target="blank">
                <img src={iconsGithub} alt="github-fill" />
                <p>View Code</p>
            </a>
        </div>
    </div>  
  </div>


  <div class="card">
    <div class="card__image-holder">
      <img class="card__image" src={card3} alt="wave" />
    </div>
    <div className="card-info">
        <div class="card-title">
            <h2>Pet-project To Do List</h2>
            <p>Implementation of To Do List on the React framework</p>
            <p><strong>Tech stack:</strong> HTML, CSS, JavaScript, React</p>
        </div>
        <div class="card-links"> 
            <a className="card-link-item" href="https://iryna-bryzhan.github.io/ToDo-List/" target="blank">
                <img src={iconsLink} alt="link-chain" />
                <p>Live Preview</p>
            </a>
            <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/ToDo-List/tree/master" target="blank">
                <img src={iconsGithub} alt="github-fill" />
                <p>View Code</p>
            </a>
        </div>
    </div>  
  </div>



  <div class="card">
    <div class="card__image-holder">
      <img class="card__image" src={card4} alt="wave" />
    </div>
    <div className="card-info">
        <div class="card-title">
            <h2>Pet-project Portfolio</h2>
            <p>Implementation of adaptive layout based on the layout</p>
            <p><strong>Tech stack:</strong> HTML, CSS</p>
        </div>
        <div class="card-links">
            <a className="card-link-item" href="https://iryna-bryzhan.github.io/Pet-project-Portfolio/" target="blank">
                <img src={iconsLink} alt="link-chain" />
                <p>Live Preview</p>
            </a>
            <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/Pet-project-Portfolio" target="blank">
                <img src={iconsGithub} alt="github-fill" />
                <p>View Code</p>
            </a>
        </div>
    </div>  
  </div>

  <div class="card">
    <div class="card__image-holder">
      <img class="card__image" src={card5} alt="wave" />
    </div>
    <div className="card-info">
        <div class="card-title">
            <h2>Conversions of simplified syntax</h2>
            <p>Implementation of the pet-project according to the technical specifications</p>
            <p><strong>Tech stack:</strong> HTML, CSS, JavaScript</p>
        </div>
        <div class="card-links">
            <a className="card-link-item" href="https://iryna-bryzhan.github.io/Conversions-of-simplified-syntax/" target="blank">
                <img src={iconsLink} alt="link-chain" />
                <p>Live Preview</p>
            </a>
            <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/Conversions-of-simplified-syntax" target="blank">
                <img src={iconsGithub} alt="github-fill" />
                <p>View Code</p>
            </a>
        </div>
    </div>  
  </div>

</div>

        </div>
        
    )
}
export default Portfolio