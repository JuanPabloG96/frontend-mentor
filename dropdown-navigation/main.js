const menuBtn = document.querySelector(".menu-icon");
const dropMenu = document.getElementById("dropdown-menu");
const closeBtn = document.getElementById("close-menu");
const mainOption = document.querySelectorAll(".main-option-container");

menuBtn.addEventListener('click', ()=>{
    dropMenu.classList.toggle("dropdown-menu-visible");
})

closeBtn.addEventListener('click', ()=>{
    dropMenu.classList.toggle("dropdown-menu-visible");
})

mainOption.forEach(element =>{    
    element.addEventListener('click', ()=>{
        elementSibling = element.nextElementSibling
        if(elementSibling.style.maxHeight == ""){
            elementSibling.style.maxHeight = "fit-content"
        }
        else elementSibling.style.maxHeight = ""
    })
})