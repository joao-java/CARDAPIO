
let li = document.querySelectorAll('.menu a' );

console.log(li);

li.forEach(function(cada, i){
    console.log(cada, i);
    if(i % 2 != 0){
        cada.classList.add("li__reverse");
    }
});
