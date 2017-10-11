export default function sidebar(){
    let sidebar = document.querySelector('.js-sidebar');
    if(sidebar){
        sidebar.addEventListener('click', function() {
            document.body.classList.toggle('active');
        })
    }
}