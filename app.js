const hamMenu = document.querySelector(".hamburger-menu");
const navUl = document.querySelector(".nav-items .nav-ul");
const overlay = document.querySelector(".overlay");
const engineimg = document.querySelectorAll(".engines .engine-containers .engine-items img");
const btncross = document.getElementById("clickoncross");
const popup = document.getElementById("popup");


hamMenu.addEventListener("click", ()=>{
    hamMenu.classList.toggle("click");
    navUl.classList.toggle("showNav")
});

engineimg.forEach(element => {
    element.addEventListener("click", ()=> {
        console.log(element);
        popup.innerHTML = "";

        console.log(popup.innerHTML)

        popup.innerHTML = `<img src="${element.src}" alt="">`;
        overlay.style.display = "flex";
        
    })
});

btncross.addEventListener("click",()=>{
    overlay.style.display = "none";

})