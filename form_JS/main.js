
let form = document.querySelector("form");
let userName= document.querySelector("#name");
let role= document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo")

const userManager = {
    users:[],
    init: function(){
        form.addEventListener("submit",this.submitForm.bind(this));
        let savedUsers = localStorage.getItem("users");
        if(savedUsers){
            this.users=JSON.parse(savedUsers);
            this.users.forEach(()=>this.renderUi());
        }
    },
    submitForm: function(e){
        e.preventDefault();
        this.addUser();
    },
    addUser: function(){
        this.users.push({
            userName:userName.value,
            role:role.value,
            bio:bio.value,
            photo: photo.value,
        })
        localStorage.setItem("users",JSON.stringify(this.users))
        this.renderUi();
        form.reset();

    },
    renderUi: function(){
        let card = document.createElement("div");
        let avatarWrapper = document.createElement("div");
        let avatarRing = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let roleE1 = document.createElement("p");
        let bioE1 = document.createElement("p");

        card.className = "user-card rounded-2xl p-6 text-center";
        avatarWrapper.className = "flex justify-center mb-4";
        avatarRing.className = "avatar-ring";
        img.className = "w-16 h-16 rounded-full object-cover block";
        name.className = "text-base font-bold text-white mb-1";
        roleE1.className = "text-xs text-purple-400 font-medium mb-3 tracking-wide uppercase";
        bioE1.className = "text-xs text-white/40 leading-relaxed";

        let user = this.users[this.users.length-1];
        let index = this.users.length-1;
        card.dataset.index = index;

        img.src = user.photo;
        img.alt = user.userName;
        name.textContent = user.userName;
        roleE1.textContent = user.role;
        bioE1.textContent = user.bio;

        avatarRing.appendChild(img);
        avatarWrapper.appendChild(avatarRing);
        card.appendChild(avatarWrapper);
        card.appendChild(name);
        card.appendChild(roleE1);
        card.appendChild(bioE1);

        document.querySelector("#userGrid").appendChild(card);

        card.addEventListener("click",this.remove.bind(this));

    },
    remove: function(e) {
    let card = e.target.closest(".user-card"); 
    let index = card.dataset.index;
    this.users.splice(index,1);
    localStorage.setItem("users",JSON.stringify(this.users)); 
    card.remove();
}

}
userManager.init();