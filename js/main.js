/* Hamburger icon animation */

function myFunction(x) {
    x.classList.toggle("change");
}

function fullScreen(x) {
    x.classList.toggle("change");
}

/* Banner Text */
function bannerText() {
    document.getElementById("bannertxt").innerHTML = "Site is currently under construction. Some imagery is from Unsplash.";
}


/* Hide header text on scroll */
const checkpoint = 250;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector('.header-text').style.opacity = opacity;
});

/* Toast snackbar */
function textCopied() {
    var x = document.getElementById("copied-alert");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }