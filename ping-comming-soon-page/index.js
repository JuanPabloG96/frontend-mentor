const form = document.querySelector(".form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();
})

document.addEventListener('click', ()=>{
    emailInput.style.border = "1px solid var(--Pale-Blue)";
    emailInput.style.outline = "none";
    emailInput.style.backgroundColor = "transparent";
    errorMessage.textContent = "";
    errorMessage.style.color = "var(--Light-Red)";
})

function validate(){
    const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let isValid = expReg.test(emailInput.value);

    if(!isValid){        
        errorMessage.style.color = "var(--Light-Red)";
        errorMessage.textContent = "please provide a valid email address";
        emailInput.style.borderColor = "var(--Light-Red)";
        emailInput.style.backgroundColor = "var(--Pale-Red)";
        emailInput.classList.add('not-valid-input');
    }
    else{
        errorMessage.style.color = "var(--Pale-Green)";
        errorMessage.textContent = "email accepted";   
        emailInput.style.outline = "1px solid var(--Pale-Green)";
        emailInput.style.backgroundColor = "var(--Light-Green)";
        emailInput.value = "";
        setTimeout(() => {
            form.submit();
        }, 1500);
    }
}//