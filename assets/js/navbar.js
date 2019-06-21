// When the user scrolls down 80px from the top of the document, add a class to the logo of the nav
document.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || document.getElementById("navbarSupportedContent").classList.contains('show')) {
        document.getElementById("logo").classList.add('nav-logo-default');
        document.getElementById("nav-bar").classList.add('navbar-custom-scrolled');
    } else {
        document.getElementById("logo").classList.remove('nav-logo-default');
        document.getElementById("nav-bar").classList.remove('navbar-custom-scrolled');
    }
}

// Change the bg of nav if collapsed on mobile device
document.getElementById("nav-bg-change").addEventListener("click", changeBackground);
function changeBackground() {
    if(document.getElementById("navbarSupportedContent").classList.contains('show')){
        document.getElementById("nav-bar").classList.remove('navbar-custom-scrolled');
        document.getElementById("logo").classList.remove('nav-logo-default');
    }else{
        document.getElementById("nav-bar").classList.add('navbar-custom-scrolled');
        document.getElementById("logo").classList.add('nav-logo-default');
    }

}