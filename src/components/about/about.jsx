import "./about.css"
import Title from '../title/title';
import ImgCode from "../../img/free-icon-code-5964949.png"
import Development from "../../img/free-icon-development-8190450.png"
import Software from "../../img/free-icon-software-development-8759392.png"
import 'animate.css';

import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Функция, которая будет вызываться при скролле
    const handleScroll = () => {
      const animItems = document.querySelectorAll(".anim-items");


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
          animItem.classList.add("active");
        } else {
          animItem.classList.remove("active");
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

  return (
        <div id="about" className="anim-items">
            <Title title="About me"></Title>
            <div className="about-content">
            <div className="about-text">
           <p> My name is Iryna and I am a Junior Front-end Developer, I completed courses in web development, JavaScript and React at 7Education under the guidance of a mentor, and also listened to several online courses.
            </p> 
            <p>I have no commercial work experience, but I have a strong interest in website development, able to provide responsive and aesthetic layout, according to requirements and standards.
            </p> 
            <p>I complete tasks on time and give priority to constant self-improvement and professional development.
            </p>
            </div>
            <div className="about-img">
                <img className="imgCode" src={ImgCode} alt="imgCode"  />
                <img className="development" src={Development} alt="Development" />
                <img className="software" src={Software} alt="Software" />
            </div>
            </div>
        </div>
    )
}
export default About