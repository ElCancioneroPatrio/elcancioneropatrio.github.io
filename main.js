function getScrollOffsetY(element) {
    var rect = element.getBoundingClientRect();
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

function scrollTo(element) {
    document.body.scroll({
        top: getScrollOffsetY(element),
        behavior: "smooth"
    });
    document.documentElement.scroll({
        top: getScrollOffsetY(element),
        behavior: "smooth"
    });
}

function scrollToElement(id) {
    var cancion = document.getElementById(id);
    scrollTo(cancion);
}

window.onscroll = () => {
    if(window.scrollY > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scroll({
    top: 0,
    behavior: "smooth"
  });
  document.documentElement.scroll({
    top: 0,
    behavior: "smooth"
  });
}