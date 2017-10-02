export default function preloader () {
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