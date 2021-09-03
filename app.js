
let add=document.getElementById('increase');
let remove=document.getElementById('decrease');
let zero=document.getElementById('reset');

let int =document.getElementById('number');
let integer=0;

add.addEventListener('click',function(){
    integer+=1;
    int.innerHTML=integer;
});

remove.addEventListener('click',function(){
     integer-=1;
     int.innerHTML=integer;
});

zero.addEventListener('click',function(){
    integer=0;
    int.innerHTML= integer;
});


console.log("Hello mdfk");