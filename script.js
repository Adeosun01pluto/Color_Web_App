const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highLightMenu = () =>{
    const elemt = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const serviceMenu = document.querySelector('#services-page')
    const aboutMenu = document.querySelector('#about-page')
    // let scrollPos = window.scrollY;
    // adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        serviceMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

}
window.addEventListener('scroll', highLightMenu)
window.addEventListener('click', highLightMenu);
const hideMenuBar = () =>{
    const menuBar  = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBar){
        menu.classList.toggle('is-active');
        menuLink.classList.remove('active')
    }
}    
menuLink.addEventListener('click', hideMenuBar)
navLogo.addEventListener('click', hideMenuBar)


