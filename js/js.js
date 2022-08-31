"use strict";
// function myFunction(event: Event) {
//     let x: HTMLButtonElement | null = document.querySelector('#myTopnav');
//     console.log('körs', x);
//     if(x) {
//         if (x.className === "topnav") {
//         x.className += " responsive";
//         } else {
//         x.className = "topnav";
//         }
//     }
//   }
const getElement = (selector) => {
    const element = document.querySelector(selector);
    console.log(element);
    if (element)
        return element;
    throw Error(`Please double check your class names, there is no ${selector} class`);
};
const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');
navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links');
});
