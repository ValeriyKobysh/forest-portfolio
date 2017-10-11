import preloader from './../components/preloader/preloader'
import flipMenu from './../components/s-welcome/s-welcome';
import menu from './../components/hamburger/hamburger';
import scrollToNextBlock from './../components/header/header';
import sidebar from './../components/sidebar/sidebar';
import { works, scrollFirstBlock } from '../components/works/works';

let flipMenuInstance = new flipMenu('.js-auth');
    flipMenuInstance.flip('.s-welcome__middle', 'flip');

preloader();

menu();
sidebar();

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


works().then(data => {
    let slider = new Slider(data.works)
        slider.render();
        slider.prev();
        slider.next();
    scrollToNextBlock()
})

scrollFirstBlock();


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
