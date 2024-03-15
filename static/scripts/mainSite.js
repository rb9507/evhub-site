let imgNav1 = document.getElementById("imgNav1");
let imgNav2 = document.getElementById("imgNav2");
let imgNav3 = document.getElementById("imgNav3");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

imgNav1.style.border = "1px solid red";
imgNav1.addEventListener("click", () => {
    console.log("Clicked on imgNav1!");
    imgNav1.style.border = "1px solid red";
    imgNav2.style.border = "1px solid white";
    imgNav3.style.border = "1px solid white";
    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
});

imgNav2.addEventListener("click", () => {
    console.log("Clicked on imgNav2!");
    imgNav1.style.border = "1px solid white";
    imgNav2.style.border = "1px solid red";
    imgNav3.style.border = "1px solid white";
    img1.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "none";
});

imgNav3.addEventListener("click", () => {
    console.log("Clicked on imgNav3!");
    imgNav1.style.border = "1px solid white";
    imgNav2.style.border = "1px solid white";
    imgNav3.style.border = "1px solid red";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
});