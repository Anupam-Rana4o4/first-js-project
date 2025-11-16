const bt1=document.getElementById("Gray");
const bt2=document.getElementById("White");
const bt3=document.getElementById("Blue");
const bt4=document.getElementById("Yellow");
const divchange=document.getElementById("main");
bt1.addEventListener("click", function(){
divchange.style.backgroundColor='gray'
});
bt2.addEventListener("click", function(){
divchange.style.backgroundColor='white'
});
bt3.addEventListener("click", function(){
divchange.style.backgroundColor='blue'
});
bt4.addEventListener("click", function(){
divchange.style.backgroundColor='yellow'
});

