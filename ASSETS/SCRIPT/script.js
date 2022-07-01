
let li = document.querySelectorAll('.menu a' );
let menu__quantidade = document.querySelectorAll('.menu a span');

// ________________________________________________________

li.forEach(function(cada, i){
    console.log(cada, i);
    if(i % 2 != 0){
        cada.classList.add("li__reverse");
    }
});

// ________________________________________________________

// localStorage.setItem('value', document.querySelectorAll(".opcoesOP .card").length);
// let teste = localStorage.getItem('value');
// console.log(teste);

let spann = document.querySelectorAll(".opcoesOP .card").length;
let arma = 0+spann;
// sessionStorage.setItem('value', spann);
// let teste1 = sessionStorage.getItem('value');
// console.log(teste1);
console.log(arma);

let bla = document.cookie = document.querySelectorAll(".opcoesOP .card");
console.log(bla);