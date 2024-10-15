const btns = document.querySelectorAll('.btn-number')
const submit = document.getElementById("submit")
const front = document.querySelector('.card-front')
const back = document.querySelector('.card-back')

function manageSelection(btn) {
    btns.forEach(btn => {
        btn.classList.remove('isSelected')
    })
    btn.classList.add('isSelected')
}

function setRating() {
    const selected = document.querySelector('.isSelected')
    if (selected) {
        document.querySelector('.choose-rating').textContent = selected.textContent
    }
    else {
        console.log('No selection done.')
    }
}

function switchCards() {
    front.style.display = "none"
    back.style.display = "flex"
}

function submitBehavior() {
    setRating()
    switchCards()
}

btns.forEach(btn => {
    btn.addEventListener('click', () => manageSelection(btn))
})

submit.addEventListener('click', submitBehavior)