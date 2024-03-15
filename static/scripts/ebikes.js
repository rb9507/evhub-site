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

let ev6APrice = document.getElementById("ev6APrice");
let ev6ARange = document.getElementById("ev6ARange");
let ev6A = document.getElementById("ev6A");

let ev6BPrice = document.getElementById("ev6BPrice");
let ev6BRange = document.getElementById("ev6BRange");
let ev6B = document.getElementById("ev6B");

let ev6CPrice = document.getElementById("ev6CPrice");
let ev6CRange = document.getElementById("ev6CRange");
let ev6C = document.getElementById("ev6C");

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

const xhr = new XMLHttpRequest();
xhr.open("GET", "/scripts/data.json", true);
xhr.onload = () => {
    if (xhr.status === 200) {
        let obj = JSON.parse(xhr.response);
        console.log(obj);
        ev1Price.innerText = obj.ebikes.revolt300.price;
        ev1Range.innerText = obj.ebikes.revolt300.range.eco;
        ev1.innerText = obj.ebikes.revolt300.name;

        ev2Price.innerText = obj.ebikes.joyMonster.price;
        ev2Range.innerText = obj.ebikes.joyMonster.range;
        ev2.innerText = obj.ebikes.joyMonster.name;

        ev3Price.innerText = obj.ebikes.revolt400.price;
        ev3Range.innerText = obj.ebikes.revolt400.range.eco;
        ev3.innerText = obj.ebikes.revolt400.name;

        ev4Price.innerText = obj.ebikes.kratos.price;
        ev4Range.innerText = obj.ebikes.kratos.range.eco;
        ev4.innerText = obj.ebikes.kratos.name;
        
        ev5Price.innerText = obj.ebikes.evoqis.price;
        ev5Range.innerText = obj.ebikes.evoqis.range;
        ev5.innerText = obj.ebikes.evoqis.name;

        ev6Price.innerText = obj.ebikes.joyThuderbolt.price;
        ev6Range.innerText = obj.ebikes.joyThuderbolt.range;
        ev6.innerText = obj.ebikes.joyThuderbolt.name;
        
        ev6APrice.innerText = obj.ebikes.joyBeast.price;
        ev6ARange.innerText = obj.ebikes.joyBeast.range;
        ev6A.innerText = obj.ebikes.joyBeast.name;

        ev6BPrice.innerText = obj.ebikes.F77.price;
        ev6BRange.innerText = obj.ebikes.F77.range;
        ev6B.innerText = obj.ebikes.F77.name;

        ev6CPrice.innerText = obj.ebikes.emfluxOne.price;
        ev6CRange.innerText = obj.ebikes.emfluxOne.range.eco;
        ev6C.innerText = obj.ebikes.emfluxOne.name;

        ev7Price.innerText = obj.ebikes.urbanS.price;
        ev7Range.innerText = obj.ebikes.urbanS.range.eco;
        ev7.innerText = obj.ebikes.urbanS.name;

        ev8Price.innerText = obj.ebikes.urbanClassic.price;
        ev8Range.innerText = obj.ebikes.urbanClassic.range.eco;
        ev8.innerText = obj.ebikes.urbanClassic.name;

        ev9Price.innerText = obj.ebikes.livewire.price;
        ev9Range.innerText = obj.ebikes.livewire.range.eco;
        ev9.innerText = obj.ebikes.livewire.name;

        ev10Price.innerText = obj.ebikes.hyperPremier.price;
        ev10Range.innerText = obj.ebikes.hyperPremier.range.eco;
        ev10.innerText = obj.ebikes.hyperPremier.name;
    } else {
        console.log("Error");
    }
};
xhr.send();