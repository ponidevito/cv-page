// Custom scripts
let acc = document.getElementsByClassName("accordion");
let content = document.getElementsByClassName("accordion__content");
let i;
let panel;


// select lenguage

let selectHeader = document.querySelector(".select__header");
let selectItem = document.querySelectorAll(".select__item");
let selectBody = document.querySelector(".select__body");
let html = document.querySelector("html");

const allLang = ["en", "es", "ua"];

let select = function () {
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  selectHeader.addEventListener("click", selectToggle);

  function selectToggle() {
    selectBody.classList.toggle("opacity");
    event.stopPropagation();
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    let lang = this.innerText;
    location.href = window.location.pathname + "#" + lang.toLowerCase();
    localStorage.setItem("place1", lang);
    selectBody.classList.remove("opacity");
    location.reload();

    if (localStorage.getItem("place1")) {
      lang = localStorage.getItem("place1");
    }
  }
};

select();

window.addEventListener("load", function () { 
  if (localStorage.getItem("place1"))
    document.querySelector(".select__current").innerHTML =
      localStorage.getItem("place1");
});

// function change lenguage
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  
  document.querySelector("title").innerHTML = langArr["unit"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();


// html or body close click 
html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" || e.target.tagName !== "BODY") {
    selectBody.classList.remove("opacity");
  }
});




// gsap

//header
gsap.fromTo(".header__image", {opacity: 0}, {opacity: 1, duration: 0.3});
gsap.fromTo(".title", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.1});
gsap.fromTo(".header__lenguage", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.2});
gsap.fromTo(".lng-age", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.3});
gsap.fromTo(".textInfo-age", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.3});
gsap.fromTo(".lng-adress", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.4});
gsap.fromTo(".lng-adress-name", {x:400}, {x:0, duration: 1.4,});
gsap.fromTo(".lng-phone", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.5});
gsap.fromTo(".textInfoPhone", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.5});
gsap.fromTo(".lng-email", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.6});
gsap.fromTo(".textInfoEmail", {x:400,opacity:0}, {x:0,opacity: 1, duration: 1.6});

//accrodeon
gsap.fromTo(".accordion", {y:200,opacity:0}, {y:0,opacity: 1, duration: 1.5});
gsap.fromTo(".accordion__item-trigger", {opacity:0}, {opacity: 1, duration: 2});



//footer

gsap.from(".footer", {opacity:0,delay:1.8});








