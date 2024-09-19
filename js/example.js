const nav = document.querySelector("#nav");
const btns = document.querySelectorAll(".headerBurger");

var state = "close";

function handleBtn () {
    state === "close" ? state = "open" : state = "close";
    state === "close" ? nav.style.left = '-110%' : nav.style.left = '0';
}

btns.forEach(btn => {
    btn.addEventListener("click", handleBtn);
});


