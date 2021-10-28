window.onload = function() {
    menuPequenyo();
}

window.onscroll = function() {
    menuPequenyo();
}

function menuPequenyo() {
    //let menu = document.querySelector("header>div.logo>a");
    let menu = document.querySelector("header>div.logo");
    let logo = menu.getElementsByTagName("a")[0];
    if (window.pageYOffset > 100) {
        //menu.classList.add("navbar-p-scroll");
        logo.style.height = "50px";
        logo.style.padding = "10px";
    } else {
        //menu.classList.remove("navbar-p-scroll");
        logo.style.height = "100px";
        logo.style.padding = "20px";
    }
}