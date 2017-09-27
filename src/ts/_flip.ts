{
    let login = document.querySelector('.s-welcome__log'),
        section = document.querySelector('.s-welcome__middle')
    login.addEventListener('click', () => {
        section.classList.toggle('flip');
    })
}

export default function text(): void{
    console.log("true");
}