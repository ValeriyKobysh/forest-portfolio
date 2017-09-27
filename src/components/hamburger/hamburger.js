export default function menu(){
    let hamburger = document.querySelector('.js-hamburger'),
        menu = document.querySelector('.js-menu');
    hamburger.addEventListener('click', function()
    {
        this.firstElementChild.classList.toggle('active');
        menu.classList.toggle('active');
    })
}