$(function(){
    $(".header-slider").slick({
        dots: true,
        vertical: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/up__arrow.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/down__arrow.png"/></button>',
        responsive: [{
          breakpoint: 376,
          settings: {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000
          }
        }]
    });
    $('.product__content-names').slick({
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product_up_arrow.png"/></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product_down_arrow.png"/></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        // fade: true,
        focusOnSelect: true,
        asNavFor: '.product__content-items',
        responsive:[{
          breakpoint: 981,
          settings: {
            vertical: false,
            arrows: false,
            slidesToShow: 3,
            dots: true,
            centerMode: false
          }
        },
        {
          breakpoint: 461,
          settings: {
            vertical: false,
            arrows: false,
            slidesToShow: 1,
            dots: true,
            centerMode: false
          }
        }]
      });
      $('.product__content-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__content-names',
        fade: true,
        prevArrow: '',
        nextArrow: ''
        // dots: true,
        // centerMode: true,
        // focusOnSelect: true
      });
});

const menuButton = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
menuButton.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--active");
});

const chooseButton = document.querySelector(".header__content-btn");
const product = document.querySelector(".product__content");
chooseButton.addEventListener("click", (event) => {
  event.preventDefault();
  product.scrollIntoView();
});

const JSON = {
  "russian": {
    "about_us": "О нас",
    "production": "Продукция",
    "why_us": "Почему мы",
    "recipe": "Рецепты",
    "history": "История",
    "contacts": "Контакты",
    "title": "Морепродукты из Норвегии",
    "text-slider--first": "Норвежские морепродукты уникальны, потому что они выращиваются экологически рациональным образом, основываясь на знаниях и опыте многих поколений, заботясь об океане и будущих поколениях.",
    "text-slider--second": "Ежедневно во всем мире подают несколько миллионов норвежских блюд из морепродуктов."
  },
  "english": {
    "about_us": "About us",
    "production": "Production",
    "why_us": "Why us",
    "recipe": "Recipes",
    "history": "History",
    "contacts": "Contacts",
    "title": "Seafood from Norway",
    "text-slider--first": "Norwegian seafood is unique because it is grown in a sustainable way, based on the knowledge and experience of many generations, caring for the ocean and future generations.",
    "text-slider--second": "Several million Norwegian seafood dishes are served every day around the world."
  } 
};

// // header__content-link header__content-link--active
// const languages = document.querySelectorAll(".header__content-link");
// const ru = languages[0];
// const en = languages[1];
// ru.addEventListener("click", (event) => {
//   event.preventDefault();
//   let ruList = [];
//   for (let population of ru.classList){
//     ruList.push(population);
//   }
//   if(ruList.includes("header__content-link--active") == false){
//     ru.classList.toggle("header__content-link--active");
//     en.classList.toggle("header__content-link--active");

//   }
// })
// en.addEventListener("click", (event) => {
//   event.preventDefault();
//   let enList = [];
//   for (let population of en.classList){
//     enList.push(population);
//   }
//   if(enList.includes("header__content-link--active") == false){
//     en.classList.toggle("header__content-link--active");
//     ru.classList.toggle("header__content-link--active");
//     for(let link of menuListLanguages){
//       let key = link.getAttribute("data-lang");
//       link.textContent = enJSON[key];
//     }
//   }
// })
// const languagesList = ["english", "russian"];

const menuListLanguages = [document.querySelectorAll(".menu__link"), document.querySelectorAll(".header__title"), document.querySelectorAll(".header-slider__text")];
const languageBlock = document.querySelector(".header__content-box");
const adaptiveSlider = document.querySelector(".header-slider__text");
languageBlock.addEventListener("click", (event) => {
  const target = event.target.closest(".header__content-link--unactive");
  const prevTarget = document.querySelector(".header__content-link--active");
  target.preventDefault;
  prevTarget.preventDefault;
  if(target){
    const language = target.getAttribute("data-current-lang");
    menuListLanguages.forEach((item, index) => {
      if(index === 2 && language === "english"){
        menuListLanguages[index].forEach((item) => {
          item.classList.toggle("header-slider__text-mode_eng");
        })} else if(index === 2 && language === "russian"){
          menuListLanguages[index].forEach((item) => {
            item.classList.remove("header-slider__text-mode_eng");
        })
      }
      for(let link of item){
        let key = link.getAttribute("data-lang");
        link.textContent = JSON[language][key];
      };
    });
    target.setAttribute("class", "header__content-link header__content-link--active");
    prevTarget.setAttribute("class", "header__content-link header__content-link--unactive");
  }  
});

