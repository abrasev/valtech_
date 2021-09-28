const navSlide = () => {
    const mobView = document.querySelector('.mob-view');
    const nav = document.querySelector(".nav-links");

    console.log(mobView);
    console.log(nav);

    if(mobView){
        mobView.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
    }
    
}
function sendEmail() 
{
    window.location = "mailto: info@codeflair.ch?subject=Poraka do VALTECH";
}
navSlide();