const custom = document.getElementById('custom');
const inputs = document.querySelectorAll('.focus-input');
const buttons = document.querySelectorAll('.btn__percent');
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const totalOutput = document.querySelector('.total-output');
const tipOutput = document.querySelector('.tip-output');
const errorMsg = document.querySelector('.error-msg');
const resetBtn = document.querySelector('.btn__reset')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('btn-active'));
    button.classList.add('btn-active');
    custom.value = '';
    calculateTip();
  });
});

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.style.outline = "2px solid var(--Strong-cyan)";
  })
  input.addEventListener('blur', () => {
    input.parentElement.style.outline = "none";
  })
})

people.addEventListener('focus', () => {
  errorMsg.setAttribute('hidden', true);
  people.parentElement.style.border = "none";
})

resetBtn.addEventListener('click', () => {
  custom.value = '';
  people.value = '';
  bill.value = '';

  tipOutput.textContent = '$0.00';
  totalOutput.textContent = '$0.00';
})

function calculateTip() {
  let billValue = parseFloat(bill.value);
  let peopleValue = parseInt(people.value);
  let customValue = parseFloat(custom.value);

  if (peopleValue == 0) {
    errorMsg.removeAttribute('hidden');
    people.parentElement.style.border = "2px solid var(--Light-orange)";
  }
  else if (bill.value != '' && billValue > 0 && people.value != '' && peopleValue > 0) {
    if (custom.value == '') {
      const btnActive = document.querySelector('.btn-active').textContent;

      let btnValue = parseInt(btnActive.split('', btnActive.indexOf("%")).join(''));
      let tipValue = billValue * (btnValue / 100);
      tipOutput.textContent = `$${(tipValue / peopleValue).toFixed(2)}`;

      let total = billValue + tipValue;
      totalOutput.textContent = `$${(total / peopleValue).toFixed(2)}`;
    }
    else {
      buttons.forEach(btn => {
        btn.classList.remove('btn-active');
      })

      let tipValue = billValue * (customValue / 100);
      tipOutput.textContent = `$${(tipValue / peopleValue).toFixed(2)}`;

      let total = billValue + tipValue;
      totalOutput.textContent = `$${(total / peopleValue).toFixed(2)}`;
    }
  }
}