function sideToggle() {
    var side = document.getElementById("side");
    side.classList.toggle("side-open");

    var toggle = document.getElementById("side-toggle");
    toggle.classList.toggle("toggled");
}

function topToggle() {
    var top = document.getElementById("update");
    top.classList.toggle("top-open");
}

function slideUp() {
    var x = document.getElementsByClassName("item");
    var i;
    var delay = 0.5;
    for (i = 0; i < x.length; i++) {
        x[i].style.animationDelay = delay + "s";
        delay = delay + 0.5;
    }
}