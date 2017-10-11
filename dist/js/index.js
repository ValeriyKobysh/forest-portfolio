/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_preloader_preloader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_s_welcome_s_welcome__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_hamburger_hamburger__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sidebar_sidebar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_works_works__ = __webpack_require__(6);







let flipMenuInstance = new __WEBPACK_IMPORTED_MODULE_1__components_s_welcome_s_welcome__["a" /* default */]('.js-auth');
    flipMenuInstance.flip('.s-welcome__middle', 'flip');

Object(__WEBPACK_IMPORTED_MODULE_0__components_preloader_preloader__["a" /* default */])();

Object(__WEBPACK_IMPORTED_MODULE_2__components_hamburger_hamburger__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_4__components_sidebar_sidebar__["a" /* default */])();

class Slider {
    constructor(data) {
        this.mainSlideContainer = document.querySelector('.js-slider-main'),
        this.prevSlideContainer = document.querySelector('.js-slider-prev'),
        this.nextSlideContainer = document.querySelector('.js-slider-next');
        this.titleSlide = document.querySelector('.js-slider-title');
        this.tagsSlide = document.querySelector('.js-slider-tags');
        this.linkSlide = document.querySelector('.js-slider-link');
        this.data = data;
        this.length = this.data.length
        this.mainSlide = 0;
        this.prevSlide = this.length - 1;
        this.nextSlide = 1;
    }

    render() {
        this.mainSlideContainer.src = this.data[this.mainSlide].img;
        this.prevSlideContainer.src = this.data[this.prevSlide].img;
        this.nextSlideContainer.src = this.data[this.nextSlide].img;
        this.titleSlide.textContent = this.data[this.mainSlide].title;
        this.tagsSlide.textContent = this.data[this.mainSlide].tags;
        this.linkSlide.href = this.data[this.mainSlide].link;
    }

    prev() {
        this.prevSlideContainer.parentElement.addEventListener('click', () => {
            (this.mainSlide == 0) ? this.mainSlide = this.length - 1 : this.mainSlide -= 1 ;
            (this.prevSlide == 0) ? this.prevSlide = this.length - 1 : this.prevSlide -= 1 ;
            (this.nextSlide == 0) ? this.nextSlide = this.length - 1 : this.nextSlide -= 1 ;
            this.render();
        })
    }

    next() {
        this.nextSlideContainer.parentElement.addEventListener('click', () => {
            (this.mainSlide == this.length - 1) ? this.mainSlide = 0 : this.mainSlide += 1 ;
            (this.prevSlide == this.length - 1) ? this.prevSlide = 0 : this.prevSlide += 1 ;
            (this.nextSlide == this.length - 1) ? this.nextSlide = 0 : this.nextSlide += 1 ;
            this.render();
        })
    }
}

function slider(mainSlideSRC, prevSlideSRC, nextSlideSRC){

}


Object(__WEBPACK_IMPORTED_MODULE_5__components_works_works__["b" /* works */])().then(data => {
    let slider = new Slider(data.works)
        slider.render();
        slider.prev();
        slider.next();
    Object(__WEBPACK_IMPORTED_MODULE_3__components_header_header__["a" /* default */])()
})

Object(__WEBPACK_IMPORTED_MODULE_5__components_works_works__["a" /* scrollFirstBlock */])();


// let waitOnLoad = new Promise((resolve, reject) => {
//     window.addEventListener('load', () => {
//         let articles = new XMLHttpRequest();
//         articles.open('GET', 'articles_first.json', false);
//         articles.send();
//         if(articles.status !=200){
//             reject(new Error(articles.statusText))
//         } else {
//             resolve(JSON.parse(articles.response));
//         }
//     })
// })

// waitOnLoad
//     .then((articlesArray) => {
//         let sidebarContainer = document.querySelector('.sidebar__list'),
//             blogContainer = document.querySelector('.s-blog__articles');

//         articlesArray.articles.forEach((element) => {
//             let sidebarItem = document.createElement('li'),
//                 blogArticle = document.createElement('article'),
//                 articleTitle = document.createElement('h3'),
//                 articleDate = document.createElement('span'),
//                 articleText = document.createElement('div');
                
//             articleText.classList.add('article__text');
//             articleDate.classList.add('article__date');
//             articleTitle.classList.add('article__title');
//             blogArticle.classList.add('s-blog__article', 'article');
//             sidebarItem.classList.add('sidebar__item');

//             sidebarItem.textContent = element.title;
//             sidebarContainer.appendChild(sidebarItem);

//             articleTitle.textContent = element.title;
//             articleDate.textContent = element.date;
//             articleText.textContent = element.text;

//             blogArticle.appendChild(articleTitle);
//             blogArticle.appendChild(articleDate);
//             blogArticle.appendChild(articleText);

//             blogContainer.appendChild(blogArticle);
//         });
//     })
//     .then(() => {
//         scrollToNextBlock()
//     })


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = preloader;
function preloader () {
    let preloader = document.querySelector('.js-preloader'),
        images = document.images,
        imagesCount = images.length,
        imagesLoaded = 0;

    for (var i = 0; i < imagesCount; i++) {
        let imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
    }

    function imageLoaded() {
        imagesLoaded++;
        document.querySelector('.preloader__icon-text').textContent = (( ( 100 / imagesCount ) * imagesLoaded ) << 0)
        // if (imagesLoaded >= imagesCount) {
        // }
    }
    window.addEventListener('load', function () {
        preloader.classList.add('load');
    })
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class flipMenu {
    constructor(button) {
        this.btn = document.querySelector(button);
    }
    flip(section, customClass){
        this.block = document.querySelector(section);
        this.class = customClass;
        if(this.btn){
            this.btn.addEventListener('click', () => {
                this.btn.style.visibility = 'hidden';
                this.block.classList.toggle(this.class);
            })
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = flipMenu;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = menu;
function menu(){
    let hamburger = document.querySelector('.js-hamburger'),
        menu = document.querySelector('.js-menu');
    hamburger.addEventListener('click', function()
    {
        this.firstElementChild.classList.toggle('active');
        menu.classList.toggle('active');

        if(this.firstElementChild.classList.contains('active')){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    })
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollNextBlock;
function scrollNextBlock(){
    let startBlock = document.querySelector('.js-start-block'),
        trigger = document.querySelector('.js-scroll-next-block'),
        nextBlock = document.querySelector('.js-next-block');
    trigger.addEventListener('click', function()
    {
        let top = nextBlock.offsetTop,
            step = top / 40;

        function animate()
        {
            if(nextBlock.getBoundingClientRect().top >= 0)
            {
                window.scrollBy(0, step);
                requestAnimationFrame(animate);
            }
        }
            requestAnimationFrame(animate);
    })
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sidebar;
function sidebar(){
    let sidebar = document.querySelector('.js-sidebar');
    if(sidebar){
        sidebar.addEventListener('click', function() {
            document.body.classList.toggle('active');
        })
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = works;
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollFirstBlock;
function works() {
    return new Promise((resolve, reject) => {
        window.addEventListener('load', () => {
            let works = new XMLHttpRequest();
            works.open('GET', 'works.json', false);
            works.send();
            if(works.status !=200){
                reject(new Error(works.statusText))
            } else {
                resolve(JSON.parse(works.response));
            }
        })
    })
}

function scrollFirstBlock(){
    let startBlock = document.querySelector('.js-start-block'),
        trigger = document.querySelector('.js-scroll-first-block'),
        nextBlock = document.querySelector('.js-start-block');
    trigger.addEventListener('click', function()
    {
        let top = nextBlock.getBoundingClientRect().top,
        step = top / 40;
        
        function animate()
        {
            if(nextBlock.getBoundingClientRect().top < 0)
            {
                window.scrollBy(0, step);
                requestAnimationFrame(animate);
            }
        }
            requestAnimationFrame(animate);
    })
}



/***/ })
/******/ ]);