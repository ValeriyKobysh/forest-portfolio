export default class flipMenu {
    constructor(button) {
        this.btn = document.querySelector(button);
    }
    flip(section, customClass){
        this.block = document.querySelector(section);
        this.class = customClass;
        this.btn.addEventListener('click', () => {
            this.btn.style.visibility = 'hidden';
            this.block.classList.toggle(this.class);
        })
    }
}
