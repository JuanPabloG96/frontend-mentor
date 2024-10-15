const input = document.getElementById("fName");
const label = document.getElementById("fName-label");
const form = document.querySelector(".form");

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log("submit event working");
    

    if(input.value = ""){
        label.style.display = "block";
    }
})

