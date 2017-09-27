{
    var login = document.querySelector('.s-welcome__log'), section_1 = document.querySelector('.s-welcome__middle');
    login.addEventListener('click', function () {
        section_1.classList.toggle('flip');
    });
}
