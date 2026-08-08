// ==========================
// Sticky Navbar
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


// ==========================
// Hero Animation
// ==========================

window.addEventListener("load",()=>{

    document.querySelector(".hero-content").classList.add("show");

});