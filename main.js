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

function scrollToElement(element) {
    var cancion = document.getElementById("cancion" + element.id);
    scrollTo(cancion);
}