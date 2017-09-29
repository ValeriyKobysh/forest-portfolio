import menu from './../components/hamburger/hamburger';
import scrollToNextBlock from './../components/header/header';
import sidebar from './../components/sidebar/sidebar';

menu();
sidebar();

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
        scrollToNextBlock()
    })
