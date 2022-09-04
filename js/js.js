"use strict";
const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element)
        return element;
    throw Error(`Please double check your class names, there is no ${selector} class`);
};
const links = getElement('.nav-links');
const navBtn = getElement('.nav-btn');
navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links');
});
const elRecipeNameOutput = document.querySelector('#recipe-name');
const elInstructionsOutput = document.querySelector('#instructions-output');
const elCookTimeOutput = document.querySelector('#cookTime-output');
const elAboutContainer = document.querySelector('#about-container');
const elAboutHead = document.querySelector('#about-head');
const elDescText1 = document.querySelector('#desc-text1');
const elDescText2 = document.querySelector('#desc-text2');
function fetchText() {
    fetch('/assets/recipes/about-text.json')
        .then(response => response.json()).then(data => {
        if (elDescText1 && elDescText2 && elAboutContainer && elAboutHead) {
            let head = data.header;
            let text1 = data.descText1;
            let text2 = data.descText2;
            let image = data.imgSrc;
            elAboutHead.textContent = head;
            elDescText1.textContent = text1;
            elDescText2.textContent = text2;
            const img = document.createElement("img");
            img.src = image;
            img.className = "cust-aboutImg";
            elAboutContainer === null || elAboutContainer === void 0 ? void 0 : elAboutContainer.appendChild(img);
        }
        else {
            console.error('Something went wrong(fetchText)');
        }
    });
}
const elLoginForm = document.querySelector('#myForm');
function openForm() {
    if (elLoginForm) {
        elLoginForm.style.display = "block";
    }
}
function closeForm() {
    if (elLoginForm) {
        elLoginForm.style.display = "none";
    }
}
const welcomeText = document.querySelector("#welcomeText");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');
const myForm = document.querySelector('#myForm');
function saveInput(event) {
    event.preventDefault();
    if (email && password && welcomeText && myForm) {
        let data = {
            "email": email.value,
        };
        localStorage.setItem("email", data.email);
        let userEmail = localStorage.getItem("email");
        let message = `Welcome user: ${userEmail}`;
        welcomeText.textContent = message;
    }
    else {
        console.error('Something went wrong(saveInput)');
    }
}
myForm === null || myForm === void 0 ? void 0 : myForm.addEventListener('submit', saveInput);

function outputMessage(event) {
    if (welcomeText) {
        let storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            let message = `Welcome user: ${storedEmail}`;
            welcomeText.textContent = message;
        }
    }
    else {
        console.error('Something went wrong(outputMessage)');
    }
    console.log('hello');
}
