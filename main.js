var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-134px";
    }
    prevScrollpos = currentScrollPos;
}

document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
        '--x', (
            e.clientX + window.scrollX
        )
    + 'px'
    );
    document.documentElement.style.setProperty(
        '--y', (
            e.clientY + window.scrollY
        )
    + 'px'
    );
}