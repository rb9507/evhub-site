let ham = document.querySelector("#ham");
let menu = document.querySelector("#menu");
let cross = document.querySelector("#cross");
let welcome = document.querySelector("#welcome");
let body = document.querySelector("#body");

// ------------
ham.addEventListener("click", function open() {
    ham.style.display = "none";
    menu.style.display = "block";
    welcome.style.visibility = "hidden";
    cross.addEventListener("click", function close() {
        menu.style.animation = "crossBar 500ms ease-in";
        setTimeout(() => {
            menu.style.display = "none";
            welcome.style.visibility = "visible";
            welcome.style.opacity = 0.5;
        }, 480);
        setTimeout(() => {
            ham.style.display = "block";
            menu.style.animation = "menuBar 300ms ease-out";
            welcome.style.opacity = 1;
        }, 500);
    })
})
// -------------