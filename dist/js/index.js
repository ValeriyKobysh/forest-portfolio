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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hamburger_hamburger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar__ = __webpack_require__(3);




Object(__WEBPACK_IMPORTED_MODULE_0__components_hamburger_hamburger__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar__["a" /* default */])();

let waitOnLoad = new Promise((resolve, reject) => {
    window.addEventListener('load', () => {
        let articles = new XMLHttpRequest();
        articles.open('GET', 'articles_first.json', false);
        articles.send();
        if(articles.status !=200){
            reject(new Error(articles.statusText))
        } else {
            resolve(JSON.parse(articles.response));
        }
    })
})

waitOnLoad
    .then((articlesArray) => {
        let sidebarContainer = document.querySelector('.sidebar__list'),
            blogContainer = document.querySelector('.s-blog__articles');

        articlesArray.articles.forEach((element) => {
            let sidebarItem = document.createElement('li'),
                blogArticle = document.createElement('article'),
                articleTitle = document.createElement('h3'),
                articleDate = document.createElement('span'),
                articleText = document.createElement('div');
                
            articleText.classList.add('article__text');
            articleDate.classList.add('article__date');
            articleTitle.classList.add('article__title');
            blogArticle.classList.add('s-blog__article', 'article');
            sidebarItem.classList.add('sidebar__item');

            sidebarItem.textContent = element.title;
            sidebarContainer.appendChild(sidebarItem);

            articleTitle.textContent = element.title;
            articleDate.textContent = element.date;
            articleText.textContent = element.text;

            blogArticle.appendChild(articleTitle);
            blogArticle.appendChild(articleDate);
            blogArticle.appendChild(articleText);

            blogContainer.appendChild(blogArticle);
        });
    })
    .then(() => {
        Object(__WEBPACK_IMPORTED_MODULE_1__components_header_header__["a" /* default */])()
    })


/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sidebar;
function sidebar(){
    let sidebar = document.querySelector('.js-sidebar');

    sidebar.addEventListener('click', function() {
        document.body.classList.toggle('active');
    })
}

/***/ })
/******/ ]);