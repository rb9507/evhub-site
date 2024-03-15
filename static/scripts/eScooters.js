let ev1Price = document.getElementById("ev1Price");
let ev1Range = document.getElementById("ev1Range");
let ev1 = document.getElementById("ev1");

let ev2Price = document.getElementById("ev2Price");
let ev2Range = document.getElementById("ev2Range");
let ev2 = document.getElementById("ev2");

let ev3Price = document.getElementById("ev3Price");
let ev3Range = document.getElementById("ev3Range");
let ev3 = document.getElementById("ev3");

let ev4Price = document.getElementById("ev4Price");
let ev4Range = document.getElementById("ev4Range");
let ev4 = document.getElementById("ev4");

let ev5Price = document.getElementById("ev5Price");
let ev5Range = document.getElementById("ev5Range");
let ev5 = document.getElementById("ev5");

let ev6Price = document.getElementById("ev6Price");
let ev6Range = document.getElementById("ev6Range");
let ev6 = document.getElementById("ev6");

let ev7Price = document.getElementById("ev7Price");
let ev7Range = document.getElementById("ev7Range");
let ev7 = document.getElementById("ev7");

let ev8Price = document.getElementById("ev8Price");
let ev8Range = document.getElementById("ev8Range");
let ev8 = document.getElementById("ev8");

let ev9Price = document.getElementById("ev9Price");
let ev9Range = document.getElementById("ev9Range");
let ev9 = document.getElementById("ev9");

let ev10Price = document.getElementById("ev10Price");
let ev10Range = document.getElementById("ev10Range");
let ev10 = document.getElementById("ev10");

let ev11Price = document.getElementById("ev11Price");
let ev11Range = document.getElementById("ev11Range");
let ev11 = document.getElementById("ev11");

let ev12Price = document.getElementById("ev12Price");
let ev12Range = document.getElementById("ev12Range");
let ev12 = document.getElementById("ev12");

let ev13Price = document.getElementById("ev13Price");
let ev13Range = document.getElementById("ev13Range");
let ev13 = document.getElementById("ev13");

let ev14Price = document.getElementById("ev14Price");
let ev14Range = document.getElementById("ev14Range");
let ev14 = document.getElementById("ev14");

let ev15Price = document.getElementById("ev15Price");
let ev15Range = document.getElementById("ev15Range");
let ev15 = document.getElementById("ev15");

console.log("Worked!!");

const xhr = new XMLHttpRequest();
xhr.open("GET", "/scripts/data.json", true);
xhr.onload = () => {
    if (xhr.status === 200) {
        let obj = JSON.parse(xhr.response);
        console.log(obj);
        ev1Price.innerText = obj.eScooters.reo.price;
        ev1Range.innerText = obj.eScooters.reo.range;
        ev1.innerText = obj.eScooters.reo.name;

        ev2Price.innerText = obj.eScooters.optima.price;
        ev2Range.innerText = obj.eScooters.optima.range;
        ev2.innerText = obj.eScooters.optima.name;

        ev3Price.innerText = obj.eScooters.magnus.price;
        ev3Range.innerText = obj.eScooters.magnus.range;
        ev3.innerText = obj.eScooters.magnus.name;

        ev4Price.innerText = obj.eScooters.photon.price;
        ev4Range.innerText = obj.eScooters.photon.range;
        ev4.innerText = obj.eScooters.photon.name;

        ev5Price.innerText = obj.eScooters.praise.price;
        ev5Range.innerText = obj.eScooters.praise.range;
        ev5.innerText = obj.eScooters.praise.name;

        ev6Price.innerText = obj.eScooters.s1.price;
        ev6Range.innerText = obj.eScooters.s1.range.eco;
        ev6.innerText = obj.eScooters.s1.name;

        ev7Price.innerText = obj.eScooters.iQube.price;
        ev7Range.innerText = obj.eScooters.iQube.range.eco;
        ev7.innerText = obj.eScooters.iQube.name;

        ev8Price.innerText = obj.eScooters.ipraise.price;
        ev8Range.innerText = obj.eScooters.ipraise.range;
        ev8.innerText = obj.eScooters.ipraise.name;

        ev9Price.innerText = obj.eScooters.iQubeS.price;
        ev9Range.innerText = obj.eScooters.iQubeS.range.eco;
        ev9.innerText = obj.eScooters.iQubeS.name;

        ev10Price.innerText = obj.eScooters.iQubeST.price;
        ev10Range.innerText = obj.eScooters.iQubeST.range.eco;
        ev10.innerText = obj.eScooters.iQubeST.name;

        ev11Price.innerText = obj.eScooters.ather450plus.price;
        ev11Range.innerText = obj.eScooters.ather450plus.range.eco;
        ev11.innerText = obj.eScooters.ather450plus.name;

        ev12Price.innerText = obj.eScooters.okhi90.price;
        ev12Range.innerText = obj.eScooters.okhi90.range;
        ev12.innerText = obj.eScooters.okhi90.name;

        ev13Price.innerText = obj.eScooters.ather450x.price;
        ev13Range.innerText = obj.eScooters.ather450x.range.eco;
        ev13.innerText = obj.eScooters.ather450x.name;

        ev14Price.innerText = obj.eScooters.s1pro.price;
        ev14Range.innerText = obj.eScooters.s1pro.range.eco;
        ev14.innerText = obj.eScooters.s1pro.name;

        ev15Price.innerText = obj.eScooters.chetak.price;
        ev15Range.innerText = obj.eScooters.chetak.range.eco;
        ev15.innerText = obj.eScooters.chetak.name;

    } else {
        console.log("Error");
    }
};
xhr.send();