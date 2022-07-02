
let li = document.querySelectorAll('.menu a' );
let menu__quantidade = document.querySelectorAll('.menu a span');

// ________________________________________________________

li.forEach(function(cada, i){
    console.log(cada, i);
    if(i % 2 != 0){
        cada.classList.add("li__reverse");
    }
});

//  _______________________qtd de cada menu_____________________________
let qts__opcoes = document.querySelectorAll('.menu a').length, 
qtd__lanches = document.querySelectorAll('.opcoesOP .card');

console.log(`Quantas opeções: ${qts__opcoes} \nQuantidade lanches: ${qtd__lanches.length}
`);


//  _______________________..._____________________________
let cards__oder = document.querySelectorAll('.card .valor');
console.log(cards__oder);


// cards__oder.forEach(function (cada, i) {
//     console.log(cada);
//     qtd__lanches.forEach(function (cadal, l) {
//         console.log(cadal);
//     })
// })