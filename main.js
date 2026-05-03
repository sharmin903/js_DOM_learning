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
})
let nm= document.querySelector("#name");
let form= document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display="initial";
    }
    else{
        document.querySelector("#hide").style.display="none";
    }

})

//A closure is when an inner function remembers the variables of its outer function, even after the outer function is done.

function createToaster(config){
    const container=document.querySelector(".parents");
    container.classList.add(
        config.positionX === "right"?"right-5":"left-5",
        config.positionY==="bottom"?"bottom-5":"top-5"
    );
    return function(str){
        let div = document.createElement("div");
        div.textContent=str;
        div.className= `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white":"bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;
        container.appendChild(div);
        
        setTimeout(() =>{
            container.removeChild(div);
        },config.duration*1000);

    }

}
let toaster=createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3,
})
toaster("downlode done !");
setTimeout(()=>{
    toaster("Nabila accepted ur request");
},2000);*/

//oop
function cakeCreate(brand, model, flavour, size, price) {
    this.brand = brand;
    this.model = model;
    this.flavour = flavour;
    this.size = size;
    this.price = price;
}
let cake1 = new cakeCreate("all time", "234", "strawberry", "large", "123tk");
//prototype
function Pen(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;

}
Pen.prototype.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
}
let pencil1 = new Pen("matador", "white", 10);
let pencil2 = new Pen("all time", "red", 20);
//class (constructor,methodes)
class CreatPen{
    constructor(name,company,color,price){
        this.name=name;
        this.company=company;
        this.color=color;
        this.price=price;

    }
    erase(){
        document.body.querySelectorAll("h1").forEach((elem)=>{
            if(elem.style.color===this.color){
                elem.remove();
            }
        })
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild(h1);
    }
}
let p1 = new CreatPen("nataraj","nataraj","pink",20);
let p2 = new CreatPen("raj","raj","yellow",20);

//class(extand,super)
class User{
    constructor(name,address,username,email){
        this.name=name;
        this.username=username;
        this.address=address;
        this.email=email;
        this.role="user";
    }
    checkRole(){
        console.log(`you are a ${this.role}`)
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent=`${this.name}:${text}`;
        document.body.appendChild(h1);

    }
}
class Admin extends User{
    constructor(name,address,username,email){
        super(name,address,username,email);
        this.role="admin";
    }
    erase(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }
} 
let user1 = new User("nabila","user123","dhaka","sharmin@gmail.com");
let user2 = new User("mona","ser13563","dhaka","rmin@gmail.com");
let admin1 = new Admin("shrit","gdhsg123","dhaka","ssadhsn@gmail.com");

// CALL back
function BringProfile(username,cb){
    console.log("Fetching profile data...");
    setTimeout(()=>{
        cb({_id:12122,username,age:26,email:"nabils234@gmail.com"});
    },2000);
}
function BringAllpost(id,cb){
    console.log("Fetching all post....");
    setTimeout(()=>{
        cb({_id:1234,posts:["hey","how are u?","good evening "]})
    },3000)

}

function SavedPost(id,cb){
    console.log("Fetching saved data....");
    setTimeout(()=>{
        cb({_id:2343254, saved:[21,32,4,32,49]})
    },4000)
}
//call back hell
BringProfile("nabila",function(data){
    console.log(data);
    BringAllpost(data._id,function(posts){
        console.log(posts);
        SavedPost(data._id,function(saved){
            console.log(saved);
        })
    })
})
//promise

let pr= new Promise (function(res,rej){
    setTimeout(()=>{
        let rn= Math.floor(Math.random()*10);
        if(rn>5)res("resolve with"+ rn);
        else rej("rejected with " + rn); 
    },3000);
})
pr.then(function(vale){
    console.log(vale);
}).catch(function(vale){
    console.log(vale);
})

//promise and async also allsettled 

const tasks = ["task1","task2","fail-task2", "task3"];
const processTask= (task)=>new Promise ((resolve,reject)=>setTimeout(()=>task.includes("fail")?reject(`${task}failed!!`):resolve(task),1000));
const results = await Promise.allSettled(task.map(processTask));
results.forEach(r=>r.status==="fullfiled"?console.log("success:",r.value):console.log("Error:",r.reason));