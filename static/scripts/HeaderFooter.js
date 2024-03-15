let ham = document.querySelector("#ham");
let menu = document.querySelector("#menu");
let cross = document.querySelector("#cross");
let body = document.querySelector("#body");

// ------------
ham.addEventListener("click", function open() {
    ham.style.display = "none";
    menu.style.display = "block";
    cross.addEventListener("click", function close() {
        menu.style.animation = "crossBar 300ms ease-in";
        setTimeout(() => {
            menu.style.display = "none";
        }, 280);
        setTimeout(() => {
            ham.style.display = "block";
            menu.style.animation = "menuBar 300ms ease-out";
        }, 280);
    })
})
// -------------