export function works() {
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

export function scrollFirstBlock(){
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

