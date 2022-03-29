let numbers= ['3','8','J'];
let symbols = ['&#9829;','&#9827;','&#9824;'];

const numeroRandom = (valor) =>{
        return Math.floor(Math.random()*valor);
}

const string1= symbols[numeroRandom(symbols.length)];
//console.log(string1);

const div = document.querySelector(".div-2");
div.innerHTML = string1;
div.style.fontWeight = "bold";

const string2= numbers[numeroRandom(numbers.length)]
//console.log(string2);

const div2 = document.querySelector(".div-3");
div2.innerHTML = string2;
div2.style.fontWeight = "bold";

const string3= symbols[numeroRandom(symbols.length)]
//console.log(string3);

const div3 = document.querySelector(".div-4");
div3.innerHTML = string3;
div3.style.fontWeight = "bold";