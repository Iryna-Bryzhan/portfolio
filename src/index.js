import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', function() {
  var menuLinks = document.querySelectorAll('.menu-list a');
  
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', smoothScroll);
  }
});
function smoothScroll(event) {
  event.preventDefault();
  var targetId = this.getAttribute('href');
  var targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ scrollBehavior: 'smooth' });
  
}



// let options = {
//   rool: null,
//   rootMargin: '5px',
//   threshold: 0.5
// }

// let callback = function(entries, observer){
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       console.log('find', entry)
//       entry.target.classList.add('animate__animated')
//       observer.unobserve(entry.target)
//     }
//   })
// }
// let observer = new IntersectionObserver(callback, options)

// let targets = document.querySelectorAll('.anim')
// targets.forEach(target => {
//   observer.observe(target)
// })

const animItems = document.querySelectorAll(".anim-items")

if(animItems.length > 0 ){
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll(){
    for(let index = 0; index < animItems.length; index++){
      const animItem = animItems[index]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight>window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight/animStart
      }
      if((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)){
        animItem.classList.add("active")
      }  else{
        animItem.classList.remove('active')
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRest(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
 
  }
  animOnScroll()
}
