
import "./menu.css"
import "../../index"

function myFunction() {
    let menuBurger = document.querySelector(".menu-burger");
    let containerBurger = document.querySelector(".container-burger");

    if (containerBurger.classList.contains("change")) {
        containerBurger.classList.remove("change");
        menuBurger.style.display = "none"; // Приховуємо меню при видаленні класу .change
    } else {
        containerBurger.classList.add("change");
        menuBurger.style.display = "block"; // Показуємо меню при додаванні класу .change
    }
}

const Menu = () => {
    const handleMenuClick = () => {
        myFunction(); // Викликаємо функцію для зміни класу при кліку на пункт меню
    };
    return (
        <>
            <div className="menu">
                <a href="/" className="logo">Iryna Bryzhan</a>
                <div className="menu-list">
                    <a href="#about">About me</a>
                    <a href="#skills">Skills</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact" className="contactMe">CONTACT ME</a>
                </div>
                <div class="container-burger" onClick={myFunction}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>

            <div class="menu-burger">
                <div class="menu-burger-item">
                <a href="#about" onClick={handleMenuClick}>About me</a>
                <a href="#skills" onClick={handleMenuClick}>Skills</a>
                <a href="#portfolio" onClick={handleMenuClick}>Portfolio</a>
                <a href="#contact" className="contactMe" onClick={handleMenuClick}>CONTACT ME</a>
                </div>
            </div>
        </>
    )
}

export default Menu;

