/*let sel = document.querySelector("select");
let device=document.querySelector("#device");

sel.addEventListener("change",function(dets){
    console.log(dets.target.value);
    device.textContent=`${dets.target.value} is selected`;
});

let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(dets){
    //console.log(dets.key);
    if(dets.key==" "){
        h1.textContent = "SPC";
    }
    else{ 
    h1.textContent = dets.key.toUpperCase();
}
});

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp")
btn.addEventListener("click",function(){
    fileinp.click();
});
fileinp.addEventListener("change",function(dets){
   const file =dets.target.files[0];
   if(file){
    btn.textContent = file.name;
   }
})

let abcd = document.querySelector("#color");

abcd.addEventListener("mouseover",function(){
    abcd.style.backgroundColor= "yellow";
})
abcd.addEventListener("mouseout",function(){
    abcd.style.backgroundColor = "pink";
})
window.addEventListener("mousemove",function(dets){
    abcd.style.top=dets.clientY+"px";
    abcd.style.left= dets.clientX+"px";
})
let ul = document.querySelector("ul");
ul.addEventListener("click",function(dets){
    dets.target.classList.toggle("lt");
})
let input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input",function(dets){
    let left = 50-input.value.length;
    span.textContent= left;
    if(0>left){
        span.style.color= "red";
    }
    else{
        span.style.color= "white";
    }
})*/
let nm= document.querySelector("#name");
let form= document.querySelector("form");

form.addEventListener("submit",function(dets){
    
})
