export default function scrollNextBlock(){
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