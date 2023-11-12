import Title from "../title/title" 
import html from "../../img/html5.svg"
import css from "../../img/Css3.svg"
import sass from "../../img/Sass.svg"
import js from "../../img/js.svg"
import react from "../../img/React.svg"
import bootstrap from "../../img/bootstrap.svg"
import git from "../../img/git.svg"
import github from "../../img/akar-icons_github-fill.svg"
import figma from "../../img/figma.png"

import "./skills.css"

import React, { useEffect } from 'react';

const Skills = () =>{
    useEffect(() => {
        const handleScroll = () => {
          const animItems = document.querySelectorAll(".anim-skills"); // Используем другой класс для нового раздела
        

    animItems.forEach((animItem) => {
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = animItem.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const animStart = 4;

        let animItemPoint = windowHeight - animItemHeight / animStart;

        if (animItemHeight > windowHeight) {
          animItemPoint = windowHeight - windowHeight / animStart;
        }

        if (animItemOffset < animItemPoint) {
          animItem.classList.add("active2");
        } else {
          animItem.classList.remove("active2");
        }
      });
    };

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll);

    // Вызываем функцию при первой загрузке компонента
    handleScroll();

    // Убираем обработчик скролла при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только при монтировании и размонтировании компонента


    return(
        <div id="skills" className="anim-skills">
            <Title title="Skills"></Title>
            <div className="using">USING NOW:</div>
            <div className="skills-list">

            <div className="skills-item ">
                <div className="skills-item-img">
                    <img src={html} alt="html" />
                </div>
                <div className="skills-item-text anim animate__bounce">HTML5</div>
            </div>
            <div className="skills-item">
                <div className="skills-item-img">
                    <img src={css} alt="css" />
                </div>
                <div className="skills-item-text">CSS3</div>
            </div>
            <div className="skills-item">
                <div className="skills-item-img">
                    <img src={sass} alt="sass" />
                </div>
                <div className="skills-item-text">SASS</div>
            </div>
            <div className="skills-item">
                <div className="skills-item-img">
                    <img src={js} alt="ls" />
                </div>
                <div className="skills-item-text">JAVASCRIPT</div>
            </div>
            <div className="skills-item">
                <div className="skills-item-img">
                     <img src={react} alt="react" />
                </div>
                <div className="skills-item-text">REACT</div>
            </div>
            <div className="skills-item">
                <div className="skills-item-img">
                    <img src={bootstrap} alt="bootstrap" />
                </div>
                <div className="skills-item-text">BOOTSTRAP</div>
            </div>
            <div className="skills-item">
                <div className="skills-item-img">
                    <img src={git} alt="git" /> 
                </div>
                <div className="skills-item-text">GIT</div>
            </div>
            <div className="skills-item">
                <div className="skills-item-img">
                    <img src={github} alt="github" /> 
                </div>
                <div className="skills-item-text">GitHub</div>
            </div>
            <div className="skills-item">
                <div className="skills-item-img">
                    <img src={figma} alt="figma" />
                </div>
                <div className="skills-item-text">FIGMA</div>
            </div>

            </div>
            {/* <div className="division">--\\\///--</div> */}
        </div>
    )
}
export default Skills